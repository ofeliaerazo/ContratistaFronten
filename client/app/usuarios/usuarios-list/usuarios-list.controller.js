'use strict';
(function(){

class UsuariosListComponent {
  constructor(usuariosService, NavegateParams, $state) {
  this.usuariosService = usuariosService;
  //this.NavegateParams = NavegateParams;
  this.$state = $state;

  this.query = {
    limit:5,
    page:1
    };
  }
  $onInit(){
      this.usuariosService.query().$promise
      .then(response=>{
        console.log('usuarios lista', response);
        this.usuario=response;
      })
      .catch(err=>{console.log('error',err)})
    }
  }

angular.module('contratista2017App')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
