'use strict';

function arlService($resource, API) {
  return $resource(API+"/api/arl/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

arlService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('arlService', arlService);
