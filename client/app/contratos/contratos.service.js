'use strict';


function contratosService($resource, API) {
  return $resource(API+"/contratos/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

contratosService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('contratosService', contratosService);
