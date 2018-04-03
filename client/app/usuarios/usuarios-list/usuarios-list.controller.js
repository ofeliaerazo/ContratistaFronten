'use strict';
(function() {
  class UsuariosListComponent {
    constructor(usuariosService, $state, tipoDocumentoService, FileSaver, contratosService, $sce, API, Upload) {
      this.usuariosService = usuariosService;
      //this.NavegateParams = NavegateParams;
      this.tipoDocumentoService = tipoDocumentoService;
      this.usuariosLength = 0;
      this.user = {};
      this.$state = $state;
      this.FileSaver = FileSaver;
      this.contratosService = contratosService;
      this.query = {
        limit: 5,
        page: 1    };
        this.$sce = $sce;
        this.API = API;
        this.Upload = Upload;
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

        $('#uploadContrato').on('hidden.bs.modal', () => {
            this.file = undefined;
            this.valorContrato = undefined;
            this.numeroContrato = undefined;
            this.errMessage = undefined;
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
        /* * Limpia la consulta realizada */
        clearQuery() {
          this.usuariosLength = 0;
          this.user={};
          this.getAllUsuarios();
        }

        verContrato(id){
          this.queryParams = {idUser: id};
          this.contratosService.find(this.queryParams).$promise
            .then(res => {
                if(res.archivoAdjunto.split(".").length > 1)
                  this.file = res.archivoAdjunto;
                else
                  this.file = undefined;
              console.log('Nuevo archivo ', res, 'con este id ', id);
              console.log(res.archivoAdjunto.split("."));
              $('#exampleModal').modal('show');
            })
          console.log('Id del usuario a ver el contrato', id);
        }

        getUrlFile(){
          return this.$sce.trustAsResourceUrl('../../../assets/contratos/'+this.file);
        }

        openUpload(item){
          this.usuarioContrato = item;
          $('#uploadContrato').modal('show');
        }

        create(from) {
            this.Upload.upload({
                url: this.API + '/api/contratos/crearContrato',
                data: {
                  file: this.file,
                  idUser: this.usuarioContrato.id,
                  numeroContrato: this.numeroContrato,
                  valorContrato: this.valorContrato
                }
            }).then((resp) => {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                console.log('OK');
                $('#uploadContrato').modal('hide');
            }, (resp) => {
                  console.log(resp);
                this.errMessage = "Error al subir el contrato";
            }, (evt) => {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

            });
        }

}
  angular.module('contratista2017App')
    .component('usuariosList', {
      templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
      controller: UsuariosListComponent,
      controllerAs: 'vm'
    });
})();
