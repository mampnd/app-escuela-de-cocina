var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Escuela de Cocina',
  // App id
  id: 'com.escueladecocina',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [

      {
      path: '/cuenta/',
      url: 'cuenta.html',
    },
       {
      path: '/recetario/',
      url: 'recetarios.html',
    },
       {
      path: '/inicio/',
      url: 'index.html',
    },
       {
      path: '/master/',
      url: 'masterclass.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
