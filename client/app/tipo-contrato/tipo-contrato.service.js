
  'use strict';

function tipoContratoService($resource, API) {
  return $resource(API+"/api/tipoContrato/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

tipoContratoService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('tipoContratoService', tipoContratoService);
