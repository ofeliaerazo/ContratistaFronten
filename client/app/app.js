'use strict';

angular.module('contratista2017App', [
  'contratista2017App.constants',
  'ngCookies',
     'ngResource',
     'ngSanitize',
     'ngAnimate',
     'ngMessages',
     'ui.router',
     'ui.bootstrap',
     'satellizer',
     'ngImgCrop',
     'ngFileSaver',
     'ngMaterial',
     'LocalStorageModule',//bower install angular-local-storage --save

     'md.data.table',//libreria para ui-view-interfaz administrador
     'ngFileUpload'
     //'ngPassword'//bower install angular-password...cambiar contraseña.newcontraseña.

])
  .constant("API", "http://localhost:8080/Contratista2017")

  //config login
  .config(function($authProvider,API) {
    $authProvider.loginUrl = API+"/api/auth/login";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "Contratista2017";
  })

   //Configuracion de temas de angular material
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red')
    .backgroundPalette('grey');
  })

  //Configuracion para insertar iconos fontawesome mediante md-font-icon
  .config(function($mdIconProvider){
      $mdIconProvider
          .defaultFontSet('FontAwesome')
          .fontSet('fa', 'FontAwesome');
  })

  //config para angular localStore. Seguridad Url
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('LSContratista2017')
      .setStorageType('localStorage');

  })


//no tocar
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
