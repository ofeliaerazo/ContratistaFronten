'use strict';
(function() {

  class UsuariosListComponent {
    constructor(usuariosService, $state, tipoDocumentoService, FileSaver) {
      this.usuariosService = usuariosService;
      this.NavegateParams = NavegateParams;
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

    goUpdateUser(idUser) {
    this.navegateParams.setData('idUsuario',idUser);
    this.$state.go('usuarios-update');
  }
     exportExcel() {
    this.usuariosService.generarExcel(this.user).$promise
     .then(result => {
       console.log('exportExcel OK', result);
       var blob = new Blob([result.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          });
          this.FileSaver.saveAs(blob, 'Usuarios_IEMERGENCIA.xlsx');
          });
        }
        /**
        * Limpia la consulta realizada
        */
        clearQuery() {
          this.usuariosLength = 0;
          this.user={};
          this.getAllUsuarios();
        }

}

  angular.module('contratista2017App')
    .component('usuariosList', {
      templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
      controller: UsuariosListComponent,
      controllerAs: 'vm'
    });

})();
