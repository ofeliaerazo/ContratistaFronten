
'use strict';



function crpService($resource, API) {
  return $resource(API+"/api/crp/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

crpService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('crpService', crpService);