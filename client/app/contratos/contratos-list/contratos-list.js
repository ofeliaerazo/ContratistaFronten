'use strict';

angular.module('contratista2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contratos-list', {
        url: '/contratos-list/:idContrato',//Cuando visite esta url, passa el id de contrato que voy a a
         parent:'admin',
        template: '<contratos-list></contratos-list>'
      });
  });
