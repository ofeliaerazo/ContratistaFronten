'use strict';

function departamentosService($resource, API) {
  return $resource(API+"/api/departamentos/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

departamentosService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('departamentosService', departamentosService);
