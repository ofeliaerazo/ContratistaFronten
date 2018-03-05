'use strict';
(function(){
class UsuariosUpdateComponent {
  constructor(usuariosService, tipoDocumentoService, tipoContratoService, arlService, ciudadesService, epsService, pensionService, $state, $stateParams) {
    this.usuariosService = usuariosService;
    this.tipoDocumentoService = tipoDocumentoService;
    this.tipoContratoService  = tipoContratoService;
    this.arlService = arlService;
    this.ciudadesService = ciudadesService;
    this.epsService = epsService;
    this.pensionService = pensionService;
    this.$state=$state;
    this.$stateParams = $stateParams;
  }
  $onInit(){
    this.tipoDocumentoService.query().$promise
    .then(response=>{console.log('listado de tipoDocumento',response);
    this.tipoDocumento=response;
  })
  .catch(err=>console.console.error(err));
  this.tipoContratoService.query().$promise
  .then(response =>{
    this.tipoContrato = response;
    console.log('tipos de contrato',this.tipoContrato);
  })
  .catch(err => console.error(err));
  this.arlService.query().$promise
  .then(response =>{
    this.arl = response;
  })
  .catch(err => console.error(err));
  this.ciudadesService.query().$promise
  .then(response =>{
    this.ciudad = response;
  })
  .catch(err => console.error(err));
  this.epsService.query().$promise
  .then(response =>{
  this.eps = response;
  })
  .catch(err => console.error(err));
  this.pensionService.query().$promise
  .then(response =>{
    this.pension = response;
  })
  .catch(err => console.error(err));
  this.usuariosService.get({id:this.$stateParams.idUsuario}).$promise
  .then(response =>{
  this.usuario = response;
  console.log(this.usuario);
    })
.catch(err => console.error(err));
  }
  actualizarUsuario(){
  this.usuariosService.update({id:this.usuario.id},this.usuario).$promise
  .then(response=>{
  console.log('Usuario Actualizado')
  this.$state.go('usuarios-list');
  })
  .catch(err=>console.error(err));
  }
}
angular.module('contratista2017App')
  .component('usuariosUpdate',{
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs:'vm'
  });
})();
