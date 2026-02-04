const AdminLayout = {
    renderNav: (activeId) => {
        const html = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary mb-4">
            <div class="container-fluid">
                <a class="navbar-brand text-gold fw-bold" href="dashboard.html">GION ADMIN</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="adminNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ${activeId === 'dash' ? 'active' : ''}" href="dashboard.html"><i class="fas fa-chart-line me-1"></i> Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activeId === 'routes' ? 'active' : ''}" href="routes.html"><i class="fas fa-route me-1"></i> Route Manager</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activeId === 'bookings' ? 'active' : ''}" href="bookings.html"><i class="fas fa-ticket-alt me-1"></i> Reservations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${activeId === 'verify' ? 'active' : ''}" href="verify-ticket.html"><i class="fas fa-qrcode me-1"></i> Verify</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center gap-3">
                         <!-- Lang Toggle -->
                         <button class="btn btn-link text-light p-0 text-decoration-none fw-bold small" onclick="LangManager.toggle()">
                            <span id="langLabel">AM</span>
                         </button>
                         
                         <!-- Theme Toggle -->
                         <button class="btn btn-link text-light p-0" id="themeToggle" onclick="ThemeManager.toggle()">
                            <i class="fas fa-moon"></i>
                         </button>
                         
                         <span class="text-secondary small">admin@gion.com</span>
                         <a href="../index.html" class="btn btn-sm btn-outline-light rounded-pill">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
        document.getElementById('admin-nav-container').innerHTML = html;
        ThemeManager.init(); // Ensure theme persists in admin
    }
};
