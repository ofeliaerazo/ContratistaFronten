'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-update', {
        url: '/usuarios-update/:idUsuario',//Cuando visite esta url, passa el id de usuario que voy a a
        template: '<usuarios-update></usuarios-update>'
      });
  });
