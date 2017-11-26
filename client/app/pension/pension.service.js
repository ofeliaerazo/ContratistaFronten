'use strict';


function pensionService($resource, API) {
  return $resource(API+"/api/pension/:id",{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

pensionService.$inject=['$resource','API'];
angular.module('contratista2017App')
  .factory('pensionService', pensionService);
