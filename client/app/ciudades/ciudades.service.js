'use strict';

function ciudadesService($resource, API) {
  return $resource(API+"/api/ciudades/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

ciudadesService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('ciudadesService', ciudadesService);
