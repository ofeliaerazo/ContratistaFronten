'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tienda', {
        url: '/tienda',
        template: '<tienda></tienda>'
      });
  });
