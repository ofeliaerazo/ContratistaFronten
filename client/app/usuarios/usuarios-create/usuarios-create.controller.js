'use strict';
(function() {

  class UsuariosCreateComponent {
    constructor(usuariosService,
      tipoDocumentoService,
      arlService,
      ciudadesService,
      epsService,
      pensionService,
      supervisorService,
      $state) {
      this.usuariosService = usuariosService;
      this.tipoDocumentoService = tipoDocumentoService;
      this.arlService = arlService;
      this.ciudadesService = ciudadesService;
      this.epsService = epsService;
      this.pensionService = pensionService;
      this.$state = $state;
      this.usuario   = {
        numDocumento:null,
        ciudad: {
          id: null
        }
      };

    }
    $onInit() {

      this.tipoDocumentoService.query().$promise
        .then(response => {
          console.log("documentos", response);
          this.tipoDocumento = response;
        })
        .catch(err => console.error(err));

      this.arlService.query().$promise
        .then(response => {
          this.arl = response;
        })
        .catch(err => console.error(err));

      this.ciudadesService.query().$promise
        .then(response => {
          this.ciudad = response;
        })
        .catch(err => console.error(err));

      this.epsService.query().$promise
        .then(response => {
          this.eps = response;
        })
        .catch(err => console.error(err));

      this.pensionService.query().$promise
        .then(response => {
          this.pension = response;
        })
        .catch(err => console.error(err));
    }
    crearUsuario() {
      console.log(this.usuario);
      this.usuariosService.save(this.usuario).$promise
        .then(response => {
          console.log('usuario CREADO ok', response);
          this.$state.go('usuarios-list');
        })
        .catch(err => console.error(err));
    }
  }

  angular.module('contratista2017App')
    .component('usuariosCreate', {
      templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
      controller: UsuariosCreateComponent,
      controllerAs: 'vm'
    });

})();