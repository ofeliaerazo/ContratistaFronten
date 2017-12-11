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
     'LocalStorageModule',
     'md.data.table',
     'ngFileUpload'

])
  .constant("API", "http://localhost:8080/Contratista2017")

  //config login
  .config(function($authProvider,API) {
    $authProvider.loginUrl = API+"/api/auth/login";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "Contratista2017";
  })
  //config local store. Seguridad Url
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
