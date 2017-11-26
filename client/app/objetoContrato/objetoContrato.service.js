'use strict';


function objetoContratoService($resource, API) {
  return $resource(API+"/api/objetoContrato/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

objetoContratoService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('objetoContratoService', objetoContratoService);
