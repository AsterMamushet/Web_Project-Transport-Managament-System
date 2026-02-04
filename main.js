// Main Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load Dynamic Routes (Infinite Pages Entry Points)
  const routesWrapper = document.getElementById('routes-wrapper');
  if (routesWrapper && window.DB) {
    routesWrapper.innerHTML = '';
    const routes = DB.getRoutes();

    routes.forEach(route => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide p-3';
      slide.innerHTML = `
                <div class="card glass-card h-100 border-0" data-tilt>
                    <img src="https://placehold.co/600x400/222/gold?text=${route.to}" class="card-img-top rounded-top-4" alt="${route.to}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${route.from} <i class="fas fa-arrow-right mx-2 text-warning"></i> ${route.to}</h5>
                        <p class="card-text text-secondary">${route.busType} • ${route.duration}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="h5 mb-0 text-gold">${route.price} ETB</span>
                            <a href="pages/route-details.html?id=${route.id}" class="btn btn-sm btn-outline-gold rounded-pill pe-3 ps-3">
                                View Details <i class="fas fa-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
      routesWrapper.appendChild(slide);
    });
  }

  // 2. Initialize Libraries
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 50
    });
  }

  if (window.Swiper) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });
  }

  // 3. Inject Navbar & Footer
  renderNavbar();
  renderFooter();

  // 4. Setup Language


  // 5. Theme Init
  if (window.ThemeManager) ThemeManager.init();

  // 6. Init Search Handler
  initSearchHandler();
});

function initSearchHandler() {
  // 1. Home Page Hero Form
  const searchForm = document.getElementById('homeSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const from = document.getElementById('searchFrom').value;
      const to = document.getElementById('searchTo').value;
      const date = document.getElementById('searchDate').value;
      redirectSearch(from, to, date);
    });
  }

  // 2. Modal Form
  const btnModal = document.getElementById('btnModalSearch');
  if (btnModal) {
    btnModal.addEventListener('click', () => {
      const from = document.getElementById('modalFrom').value;
      const to = document.getElementById('modalTo').value;
      const date = document.getElementById('modalDate').value;
      redirectSearch(from, to, date);
    });
  }
}

function redirectSearch(from, to, date) {
  const params = new URLSearchParams();
  if (from && from !== 'Select City') params.append('from', from);
  if (to && to !== 'Select Destination') params.append('to', to);
  if (date) params.append('date', date);
  window.location.href = `pages/search-results.html?${params.toString()}`;
}

// --- Dynamic Rendering ---
function renderNavbar() {
  // Determine root path based on current location
  const isInPages = window.location.pathname.includes('/pages/');
  const root = isInPages ? '../' : '';
  const pages = isInPages ? '' : 'pages/';

  // Auth Check
  const userStr = localStorage.getItem('gion_current_user');
  const user = userStr ? JSON.parse(userStr) : null;

  let authHtml = '';
  if (user) {
    // Logged In: Show Avatar
    authHtml = `
      <li class="nav-item ms-3">
          <a href="${pages}profile.html" class="d-block" title="${user.name}">
             <img src="${user.avatar || `https://placehold.co/40x40/333/gold?text=${user.name.charAt(0)}`}" class="rounded-circle border border-warning" width="40" height="40">
          </a>
      </li>
    `;
  } else {
    // Guest: Show Login/Register
    authHtml = `
      <li class="nav-item ms-3">
          <a href="${pages}login.html" class="btn btn-outline-light rounded-pill px-3 me-2">Login</a>
          <a href="${pages}register.html" class="btn btn-gold rounded-pill px-3">Sign Up</a>
      </li>
    `;
  }

  const navHTML = `
        <div class="container">
            <a class="navbar-brand text-gradient fs-3" href="${root}index.html">GION BUS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="${root}index.html" data-i18n="navHome">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="${pages}services.html" data-i18n="navServices">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="${pages}destinations.html">Destinations</a></li>
                    
                    <!-- Search Link Added -->
                    <li class="nav-item"><a class="nav-link" href="${pages}search-results.html"><i class="fas fa-search"></i> Search</a></li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Support
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark glass-card border-secondary">
                            <li><a class="dropdown-item" href="${pages}my-bookings.html"><i class="fas fa-ticket-alt me-2 text-warning"></i> My Bookings</a></li>
                            <li><a class="dropdown-item" href="${pages}travel-info.html"><i class="fas fa-info-circle me-2 text-info"></i> Travel Info</a></li>
                            <li><a class="dropdown-item" href="${pages}help-center.html"><i class="fas fa-question-circle me-2 text-success"></i> Help Center</a></li>
                            <li><hr class="dropdown-divider border-secondary"></li>
                            <li><a class="dropdown-item" href="${pages}feedback.html"><i class="fas fa-comment-dots me-2 text-secondary"></i> Feedback</a></li>
                            <li><a class="dropdown-item" href="${pages}careers.html"><i class="fas fa-briefcase me-2 text-white"></i> Careers</a></li>
                        </ul>
                    </li>

                    <!-- Language & Theme -->
                    <li class="nav-item ms-lg-3 d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-outline-light rounded-pill px-3" onclick="LangManager.toggle()">
                            <i class="fas fa-globe me-2"></i><span id="langLabel">AM</span>
                        </button>
                        <button id="themeToggleBtn" class="btn btn-sm btn-outline-light rounded-circle" onclick="ThemeManager.toggle()">
                            <i class="fas fa-moon"></i>
                        </button>
                    </li>
                    ${authHtml}
                </ul>
            </div>
        </div>
    `;
  const navEl = document.getElementById('mainInfoNav');
  if (navEl) navEl.innerHTML = navHTML;
}

function renderFooter() {
  // Determine root path based on current location
  const isInPages = window.location.pathname.includes('/pages/');
  const root = isInPages ? '../' : './';
  const pages = isInPages ? '' : 'pages/';

  const footerHTML = `
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4">
                    <h5 class="text-gold mb-3">Gion Bus</h5>
                    <p class="text-secondary small">Connecting Ethiopia with comfort and style. The number one choice for luxury public transportation.</p>
                </div>
                <div class="col-md-2">
                    <h6 class="text-white mb-3">Company</h6>
                    <ul class="list-unstyled small">
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('driver-info'); return false;">Our Drivers</a></li>
                        <li><a href="${pages}partners.html" class="text-secondary text-decoration-none">Partners</a></li>
                        <li><a href="${pages}careers.html" class="text-secondary text-decoration-none">Careers</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6 class="text-white mb-3">Info</h6>
                    <ul class="list-unstyled small">
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('payment-methods'); return false;">Payments</a></li>
                         <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('cancellation-policy'); return false;">Cancellation</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('safety-standards'); return false;">Safety</a></li>
                        <li><a href="${pages}terms.html" class="text-secondary text-decoration-none">Terms</a></li>
                         <li><a href="${pages}cookies.html" class="text-secondary text-decoration-none">Cookies</a></li>
                         <li><a href="${pages}sitemap.html" class="text-secondary text-decoration-none">Site Map</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6 class="text-white mb-3">On Board</h6>
                    <ul class="list-unstyled small">
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('wifi-info'); return false;">WiFi</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('food-menu'); return false;">Food Menu</a></li>
                         <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('baggage-info'); return false;">Baggage</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6 class="text-white mb-3">Support</h6>
                    <ul class="list-unstyled small">
                        <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('lost-found'); return false;">Lost & Found</a></li>
                         <li><a href="#" class="text-secondary text-decoration-none" onclick="ModalManager.show('accessibility'); return false;">Accessibility</a></li>
                    </ul>
                </div>
            </div>
            <div class="row border-top border-secondary mt-5 pt-4">
                <div class="col-md-6 text-secondary small">
                    &copy; 2025 Gion Bus Transport. All rights reserved.
                </div>
                <div class="col-md-6 text-end">
                    <i class="fab fa-facebook text-secondary me-3"></i>
                    <i class="fab fa-telegram text-secondary me-3"></i>
                    <i class="fab fa-instagram text-secondary"></i>
                </div>
            </div>
        </div>
    `;
  const footerEl = document.getElementById('mainFooter');
  if (footerEl) footerEl.innerHTML = footerHTML;
}

// --- Language Functions (Delegated to LangManager) ---
// See assets/js/lang-manager.js
