'use strict';

function aseguradoraService($resource, API) {
  return $resource(API+"/api/aseguradora/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

aseguradoraService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('aseguradoraService', aseguradoraService);
