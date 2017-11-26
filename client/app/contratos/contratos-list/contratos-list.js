'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contratos-list', {
        url: '/contratos-list',
        template: '<contratos-list></contratos-list>'
      });
  });
