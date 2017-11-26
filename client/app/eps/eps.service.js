'use strict';

function epsService($resource, API) {
  return $resource(API+"/api/eps/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

 epsService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('epsService', epsService);
