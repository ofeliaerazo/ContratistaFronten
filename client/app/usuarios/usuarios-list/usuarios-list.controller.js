'use strict';
(function() {

  class UsuariosListComponent {
    constructor(usuariosService, $state, tipoDocumentoService, FileSaver) {
      this.usuariosService = usuariosService;
      //this.NavegateParams = NavegateParams;
      this.tipoDocumentoService = tipoDocumentoService;
      this.usuariosLength = 0;
      this.user = {};
      this.$state = $state;
      this.FileSaver = FileSaver;

      this.query = {
        limit: 5,
        page: 1
      };
    }

    $onInit() {
      this.usuariosService.query().$promise
        .then(response => {
          console.log('usuarios lista', response);
          this.usuario = response;
        })
        .catch(err => {
          console.log('error', err)
        })
    }
  }



  angular.module('contratista2017App')
    .component('usuariosList', {
      templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
      controller: UsuariosListComponent,
      controllerAs: 'vm'
    });

})();
