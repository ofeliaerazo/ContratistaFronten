
'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<admin></admin>'
      });
  });
