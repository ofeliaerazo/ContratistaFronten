'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',
        authenticate: true,
        parent:'admin',
        template: '<usuarios-list></usuarios-list>'



      });
  });
