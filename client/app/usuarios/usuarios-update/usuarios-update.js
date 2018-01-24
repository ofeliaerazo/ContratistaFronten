'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-update', {
        url: '/usuarios-update/:idUsuario',
        template: '<usuarios-update></usuarios-update>'
      });
  });
