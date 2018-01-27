'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-create', {
        url: '/usuarios-create',
        //parent:'admin',
        template: '<usuarios-create></usuarios-create>'
      });
  });
