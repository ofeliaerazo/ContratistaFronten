  'use strict';

function usuariosService($resource,API) {
	return $resource(API+"/api/usuarios/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

usuariosService.$inject=['$resource', 'API'];
angular.module('contratista2017App')
  .factory('usuariosService', usuariosService);


