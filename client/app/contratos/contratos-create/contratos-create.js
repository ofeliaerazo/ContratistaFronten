'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contratos-create', {
        url: '/contratos-create',
        parent:'admin',
        template: '<contratos-create></contratos-create>'
      });
  });
