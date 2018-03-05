'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contratos-update', {
        url: '/contratos-update',
         parent:'admin',
        template: '<contratos-update></contratos-update>'
      });
  });
