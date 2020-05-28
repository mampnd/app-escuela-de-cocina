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
      {
      path: '/nivel/',
      url: 'levels.html',
    },
      {
      path: '/basico_1/',
      url: 'basico.html',
    },
       {
      path: '/feliz/',
      url: 'desbloquear.html',
    },
        {
      path: '/herramientas/',
      url: 'herramientas.html',
    },
       {
      path: '/cuchillos/',
      url: 'cuchillos.html',
    },
      {
      path: '/medio/',
      url: 'intermedio.html',
    },
       {
      path: '/alto/',
      url: 'avanzado.html',
    },
      {
      path: '/pais/',
      url: 'pais.html',
    },
      {
      path: '/variospaises/',
      url: 'variospaises.html',
    },
       {
      path: '/todopasta/',
      url: 'todopasta.html',
    },
       {
      path: '/pastabolo/',
      url: 'pastabolo.html',
    },
       {
      path: '/producto/',
      url: 'producto.html',
    },
       {
      path: '/pollo/',
      url: 'pollo.html',
    },
       {
      path: '/pollomac/',
      url: 'pollomac.html',
    },
       {
      path: '/arco/',
      url: 'arco.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
