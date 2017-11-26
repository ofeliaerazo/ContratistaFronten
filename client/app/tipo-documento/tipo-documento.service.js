  'use strict';

function tipoDocumentoService($resource, API) {
  return $resource(API+"/api/tipoDocumento/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

tipoDocumentoService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('tipoDocumentoService', tipoDocumentoService);
