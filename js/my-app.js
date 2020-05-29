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
         {
      path: '/ocasion/',
      url: 'ocasion.html',
    },
      {
      path: '/fiestas/',
      url: 'fiestas.html',
    },
       {
      path: '/todonavidad/',
      url: 'todonavidad.html',
    },
      {
      path: '/rosca/',
      url: 'rosca.html',
    },
       {
      path: '/vege/',
      url: 'vegetariana.html',
    },
      {
      path: '/todovege/',
      url: 'todovegetariano.html',
    },
       {
      path: '/hamburguesa/',
      url: 'hamburguesa.html',
    },
       {
      path: '/reposteria/',
      url: 'reposteria.html',
    },
      {
      path: '/postres/',
      url: 'postres.html',
    },
      {
      path: '/cupcake/',
      url: 'cupcake.html',
    },
      {
      path: '/mapatour/',
      url: 'mapatour.html',
    },
      {
      path: '/paises/',
      url: 'paises.html',
    },
      {
      path: '/inglaterra/',
      url: 'inglaterra.html',
    },
       {
      path: '/popular/',
      url: 'popular.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
//abrir popup
var abrirPopupInicial = app.popup.open(".popup-about");

function cerrarpopup() {
    cerrarpopup = setTimeout(function () {
        var abrirPopupInicial = app.popup.close(".popup-about");
        popupbienvenida()
    }, 3000);

    function popupbienvenida() {
        var abrirPopupBienvenida = app.popup.open(".popup-bienvenida");
    }
}
cerrarpopup()
function popupresgistrarse() {
    //    var abrirPopupRegistrarse = app.popup.open(".popup-registrarse");
    var abrirPopupBienvenida = app.popup.close(".popup-bienvenida")
}

function popupiniciarsesion() {
    var abrirPopupIniciarsesion = app.popup.open(".popup-iniciarsesion");
}
