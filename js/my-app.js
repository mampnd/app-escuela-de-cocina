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

  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

//abrir popup
var abrirPopupInicial = app.popup.open(".popup-about");

function cerrarpopup (){
    cerrarpopup = setTimeout(function (){
        var abrirPopupInicial = app.popup.close(".popup-about");
        popupbienvenida()
    }, 2000);
function popupbienvenida () {
    var abrirPopupBienvenida = app.popup.open(".popup-bienvenida");
}
}
cerrarpopup()


