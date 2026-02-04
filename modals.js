const MODAL_CONTENT = {
  'driver-info': {
    title: 'Meet Our Drivers',
    body: `
            <div class="text-center">
                <img src="https://placehold.co/100x100/333/gold?text=D" class="rounded-circle mb-3">
                <h4>Experienced & Licensed</h4>
                <p class="text-secondary">All Gion Bus drivers have at least 10 years of experience in cross-country heavy vehicle operation.</p>
                <ul class="list-unstyled text-start d-inline-block">
                    <li><i class="fas fa-check text-gold me-2"></i> Defensive Driving Certified</li>
                    <li><i class="fas fa-check text-gold me-2"></i> Monthly Health Checkups</li>
                    <li><i class="fas fa-check text-gold me-2"></i> Drug & Alcohol Tested</li>
                </ul>
            </div>
        `
  },
  'safety-standards': {
    title: 'Safety First',
    body: `
            <div class="row">
                <div class="col-6 mb-3 text-center">
                    <i class="fas fa-tools fa-2x text-gold mb-2"></i>
                    <h6>Regular Maintenance</h6>
                    <p class="small text-secondary">Buses checked before every trip.</p>
                </div>
                <div class="col-6 mb-3 text-center">
                    <i class="fas fa-first-aid fa-2x text-gold mb-2"></i>
                    <h6>Emergency Kits</h6>
                    <p class="small text-secondary">Full medical kits on board.</p>
                </div>
                <div class="col-6 mb-3 text-center">
                    <i class="fas fa-satellite fa-2x text-gold mb-2"></i>
                    <h6>GPS Tracking</h6>
                    <p class="small text-secondary">Real-time location monitoring.</p>
                </div>
                <div class="col-6 mb-3 text-center">
                    <i class="fas fa-fire-extinguisher fa-2x text-gold mb-2"></i>
                    <h6>Fire Safety</h6>
                    <p class="small text-secondary">Automatic suppression systems.</p>
                </div>
            </div>
        `
  },
  'cancellation-policy': {
    title: 'Cancellation Policy',
    body: `
            <p>We understand plans change. Our policy is as follows:</p>
            <table class="table table-dark table-striped">
                <thead><tr><th>Time Before Departure</th><th>Refund</th></tr></thead>
                <tbody>
                    <tr><td>> 48 Hours</td><td class="text-success">100% Refund</td></tr>
                    <tr><td>24 - 48 Hours</td><td class="text-warning">50% Refund</td></tr>
                    <tr><td>< 24 Hours</td><td class="text-danger">No Refund</td></tr>
                </tbody>
            </table>
            <p class="small text-secondary">* Processing fee of 50 ETB applies.</p>
        `
  },
  'baggage-info': {
    title: 'Baggage Allowance',
    body: `
            <div class="d-flex align-items-center mb-3">
                <i class="fas fa-suitcase fa-3x text-secondary me-3"></i>
                <div>
                    <h5>Check-in Baggage</h5>
                    <p class="mb-0 text-secondary">Max 30kg per person. Dimensions: 80x50x30cm.</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <i class="fas fa-briefcase fa-3x text-secondary me-3"></i>
                <div>
                    <h5>Carry-on</h5>
                    <p class="mb-0 text-secondary">Max 7kg. Must fit in overhead compartment.</p>
                </div>
            </div>
        `
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    body: '<p>Your data is secure with us. We only share information with required government travel authorities.</p>'
  },
  'payment-methods': {
    title: 'Accepted Payments',
    body: '<p class="text-center"><i class="fas fa-credit-card fa-2x m-2"></i> <i class="fas fa-money-bill-wave fa-2x m-2"></i> <i class="fas fa-mobile-alt fa-2x m-2"></i><br>We accept Telebirr, CBE Birr, Visa, and Mastercard.</p>'
  },
  'partners': {
    title: 'Our Partners',
    body: '<p>We work with top hotels and tour agencies in Ethiopia to ensure your comfort.</p>'
  },
  'wifi-info': {
    title: 'On-Board WiFi',
    body: '<p>Enjoy free high-speed 4G LTE WiFi on all Luxury and Royal Cruiser buses. Password is provided by the attendant.</p>'
  },
  'food-menu': {
    title: 'Snack Menu',
    body: '<p>Sandwiches, Biscuits, Water, and Soft Drinks are available for purchase. Complimentary coffee is served on morning trips.</p>'
  },
  'accessibility': {
    title: 'Accessibility',
    body: '<p>Our staff is trained to assist passengers with reduced mobility. Please contact us 24h in advance for wheelchair lift assistance.</p>'
  },
  'travel-insurance': {
    title: 'Travel Insurance',
    body: '<p>Every ticket includes basic accident insurance coverage up to 100,000 ETB per passenger.</p>'
  },
  'lost-found': {
    title: 'Lost & Found',
    body: '<p>Left something behind? Visit our office at Piassa or call +251 911 000 000.</p>'
  },
  // --- DESTINATIONS ---
  'dest-addis': {
    title: 'Addis Ababa - The New Flower',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Addis+Ababa" class="img-fluid rounded mb-3"><p>The political and diplomatic capital of Africa. Visit the National Museum, Unity Park, and the bustling Merkato. <br><br><strong>Top Routes:</strong> Bahir Dar, Hawassa, Adama.</p>'
  },
  'dest-bahirdar': {
    title: 'Bahir Dar - The Riviera',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Bahir+Dar" class="img-fluid rounded mb-3"><p>Home to Lake Tana and the Blue Nile Falls. A tropical paradise with palm-lined avenues. <br><br><strong>Top Routes:</strong> Addis Ababa, Gondar.</p>'
  },
  'dest-gondar': {
    title: 'Gondar - Camelot of Africa',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Gondar" class="img-fluid rounded mb-3"><p>Famous for its medieval castles and churches. A UNESCO World Heritage site. <br><br><strong>Top Routes:</strong> Bahir Dar, Axum.</p>'
  },
  'dest-lalibela': {
    title: 'Lalibela - The Jerusalem of Africa',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Lalibela" class="img-fluid rounded mb-3"><p>Witness the rock-hewn churches carved from living rock. A spiritual journey unlike any other.</p>'
  },
  'dest-axum': {
    title: 'Axum - Ancient Civilization',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Axum" class="img-fluid rounded mb-3"><p>The home of the Ark of the Covenant and ancient obelisks.</p>'
  },
  'dest-mekelle': {
    title: 'Mekelle - Northern Star',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Mekelle" class="img-fluid rounded mb-3"><p>A vibrant city with rich history and the gateway to the Danakil Depression.</p>'
  },
  'dest-hawassa': {
    title: 'Hawassa - Lakeside Retreat',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Hawassa" class="img-fluid rounded mb-3"><p>Relax by the lake, enjoy fresh fish, and see the hippos.</p>'
  },
  'dest-harar': {
    title: 'Harar - City of Saints',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Harar" class="img-fluid rounded mb-3"><p>Explore the juggle (walled city) and feed the wild hyenas.</p>'
  },
  'dest-jinka': {
    title: 'Jinka - Omo Valley Gateway',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Jinka" class="img-fluid rounded mb-3"><p>Experience the diverse cultures of the Omo Valley tribes.</p>'
  },
  'dest-arbaminch': {
    title: 'Arba Minch - Forty Springs',
    body: '<img src="https://placehold.co/400x200/222/gold?text=Arba+Minch" class="img-fluid rounded mb-3"><p>Beautiful landscapes, Nech Sar National Park, and crocodile market.</p>'
  },
  // --- CAREERS ---
  'job-driver': {
    title: 'Bus Driver',
    body: '<h5>Requirements</h5><ul><li>Grade 5 License</li><li>5+ Years Experience</li><li>Defensive Driving Certificate</li></ul><p>Apply in person at our Kality office.</p>'
  },
  'job-mechanic': {
    title: 'Senior Diesel Mechanic',
    body: '<h5>Requirements</h5><ul><li>Certification in Heavy Duty Mechanics</li><li>Experience with Volvo and Scania buses</li></ul>'
  },
  'job-agent': {
    title: 'Ticketing Agent',
    body: '<h5>Requirements</h5><ul><li>High School Diploma</li><li>Computer Literacy</li><li>Fluency in Amharic and English</li></ul>'
  },
  'job-marketing': {
    title: 'Marketing Specialist',
    body: '<h5>Requirements</h5><ul><li>BA in Marketing</li><li>Digital Media Experience</li></ul>'
  },
  'job-finance': {
    title: 'Accountant',
    body: '<h5>Requirements</h5><ul><li>BA in Accounting</li><li>Peachtree/Quickbooks proficiency</li></ul>'
  },
  // --- LEGAL ---
  'terms': {
    title: 'Terms of Service',
    body: '<p>By using Gion Bus services, you agree to abide by all safety regulations...</p>'
  },
  'privacy': { // Changed from 'cookies' to 'privacy' as per instruction
    title: 'Privacy Policy', // Changed from 'Cookie Policy' to 'Privacy Policy'
    body: '<p>Your data is secure with us. We only share information with required government travel authorities.</p>' // Reused existing privacy policy body
  }
};

const ModalManager = {
  show: (key) => {
    const content = MODAL_CONTENT[key];
    if (!content) return;

    // Create modal DOM if not exists or reuse generic
    let modalEl = document.getElementById('genericModal');
    if (!modalEl) {
      const div = document.createElement('div');
      div.innerHTML = `
                <div class="modal fade" id="genericModal" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content glass-modal text-light">
                            <div class="modal-header border-bottom border-secondary">
                                <h5 class="modal-title" id="genModalTitle"></h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body p-4" id="genModalBody"></div>
                            <div class="modal-footer border-top border-secondary">
                                <button type="button" class="btn btn-sm btn-outline-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      document.body.appendChild(div);
      modalEl = document.getElementById('genericModal');
    }

    document.getElementById('genModalTitle').textContent = content.title;
    document.getElementById('genModalBody').innerHTML = content.body;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }
};
