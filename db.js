// LocalStorage Database Simulation
// Handles Routes, Bookings, and System Settings

const DB_KEYS = {
  ROUTES: 'gion_routes',
  BOOKINGS: 'gion_bookings',
  FEEDBACK: 'gion_feedback',
  THEME: 'gion_theme',
  LANG: 'gion_lang'
};

const SEED_DATA = {
  routes: [
    {
      id: 'R001',
      from: 'Addis Ababa',
      to: 'Bahir Dar',
      price: 1200,
      duration: '8h 30m',
      distance: '500 km',
      departure: '06:00 AM',
      arrival: '02:30 PM',
      busType: 'Luxury Coach',
      features: ['wifi', 'ac', 'lunch', 'reclining'],
      stops: [
        { name: 'Debre Markos', type: 'Lunch', duration: '45m', food: 'Traditional Buffet' },
        { name: 'Dangila', type: 'Rest', duration: '15m', food: 'Coffee/Tea' }
      ],
      hotel: null,
      // 40 Seats: 0=Available, 1=Booked, 2=Selected
      seats: Array(40).fill(0).map(() => Math.random() > 0.7 ? 1 : 0)
    },
    {
      id: 'R002',
      from: 'Addis Ababa',
      to: 'Gondar',
      price: 1500,
      duration: '12h 00m',
      distance: '750 km',
      departure: '05:00 AM',
      arrival: '05:00 PM',
      busType: 'Royal Cruiser',
      features: ['wifi', 'ac', 'dinner', 'toilet', 'sleep'],
      stops: [
        { name: 'Debre Markos', type: 'Lunch', duration: '40m', food: 'Injera w/ Wot' },
        { name: 'Bahir Dar', type: 'Dinner', duration: '1h', food: 'Fish Goulash' }
      ],
      hotel: { name: 'Goha Hotel', stars: 4, included: true },
      seats: Array(40).fill(0).map(() => Math.random() > 0.6 ? 1 : 0)
    },
    {
      id: 'R003',
      from: 'Addis Ababa',
      to: 'Mekelle',
      price: 1800,
      duration: '14h 00m',
      distance: '800 km',
      departure: '04:00 AM',
      arrival: '06:00 PM',
      busType: 'Comfort Plus',
      features: ['ac', 'snacks'],
      stops: [
        { name: 'Kombolcha', type: 'Lunch', duration: '30m', food: 'Pasta/Rice' },
        { name: 'Woldia', type: 'Rest', duration: '20m', food: 'Snacks' }
      ],
      hotel: null,
      seats: Array(40).fill(0).map(() => Math.random() > 0.8 ? 1 : 0)
    },
    {
      id: 'R004',
      from: 'Addis Ababa',
      to: 'Hawassa',
      price: 800,
      duration: '5h 00m',
      distance: '275 km',
      departure: '07:00 AM',
      arrival: '12:00 PM',
      busType: 'Express',
      features: ['ac', 'wifi'],
      stops: [
        { name: 'Zeway', type: 'Rest', duration: '20m', food: 'Fresh Fish' }
      ],
      hotel: null,
      seats: Array(40).fill(0).map(() => Math.random() > 0.5 ? 1 : 0)
    }
  ],
  bookings: [],
  users: [
    { id: 'U001', name: 'Gion Guest', email: 'guest@gion.com', password: '123', phone: '0911000000', avatar: 'https://placehold.co/100x100/333/gold?text=G' }
  ]
};

const DB = {
  init: () => {
    // Check & Seed Routes
    let routes = JSON.parse(localStorage.getItem(DB_KEYS.ROUTES) || 'null');
    if (!routes || (routes.length > 0 && !routes[0].seats)) {
      localStorage.setItem(DB_KEYS.ROUTES, JSON.stringify(SEED_DATA.routes));
    }

    if (!localStorage.getItem(DB_KEYS.BOOKINGS)) {
      localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify(SEED_DATA.bookings));
    }
    if (!localStorage.getItem(DB_KEYS.USERS)) {
      localStorage.setItem(DB_KEYS.USERS, JSON.stringify(SEED_DATA.users));
    }
  },

  getRoutes: () => JSON.parse(localStorage.getItem(DB_KEYS.ROUTES) || '[]'),

  getRouteById: (id) => {
    const routes = DB.getRoutes();
    return routes.find(r => r.id === id);
  },

  // Search Logic
  searchRoutes: (from, to) => {
    const routes = DB.getRoutes();
    return routes.filter(r =>
      (from === 'Any' || r.from.toLowerCase().includes(from.toLowerCase())) &&
      (to === 'Any' || r.to.toLowerCase().includes(to.toLowerCase()))
    );
  },

  updateSeat: (routeId, seatIndex, status) => {
    const routes = DB.getRoutes();
    const routeIdx = routes.findIndex(r => r.id === routeId);
    if (routeIdx > -1) {
      routes[routeIdx].seats[seatIndex] = status;
      localStorage.setItem(DB_KEYS.ROUTES, JSON.stringify(routes));
    }
  },

  saveBooking: (booking) => {
    const bookings = JSON.parse(localStorage.getItem(DB_KEYS.BOOKINGS) || '[]');
    booking.id = 'B' + Date.now().toString().slice(-6);
    booking.timestamp = new Date().toISOString();
    bookings.push(booking);
    localStorage.setItem(DB_KEYS.BOOKINGS, JSON.stringify(bookings));
    return booking;
  },

  getBookings: () => JSON.parse(localStorage.getItem(DB_KEYS.BOOKINGS) || '[]'),

  deleteRoute: (id) => {
    let routes = DB.getRoutes();
    routes = routes.filter(r => r.id !== id);
    localStorage.setItem(DB_KEYS.ROUTES, JSON.stringify(routes));
  },

  // Auth Logic
  registerUser: (user) => {
    const users = JSON.parse(localStorage.getItem(DB_KEYS.USERS) || '[]');
    if (users.find(u => u.email === user.email)) return { success: false, message: 'Email already exists' };

    user.id = 'U' + Date.now();
    user.avatar = `https://placehold.co/100x100/333/gold?text=${user.name.charAt(0)}`;
    users.push(user);
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
    return { success: true, user };
  },

  loginUser: (email, password) => {
    const users = JSON.parse(localStorage.getItem(DB_KEYS.USERS) || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
  }
};

// Initialize on Load
DB.init();
