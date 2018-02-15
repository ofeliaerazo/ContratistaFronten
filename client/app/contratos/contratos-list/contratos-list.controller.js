'use strict';
(function(){

class ContratosListComponent {
  constructor(contratosService, tipoContratoService, objetoContratoService, crpService, usuariosService, FileSaver, $state,) {
    this.contratosService = contratosService;
    this.tipoContratoService = tipoContratoService;
    this.objetoContratoService = objetoContratoService;
    this.crpService = crpService;
    this.usuariosService = usuariosService;
    this.FileSaver = FileSaver;
    this.$state = $state;
    this.contratosLength = 0;
      this.query = {
        limit: 5,
        page: 1
      };
    }

  $onInit(){
    this.contratosService.query().$promise
    .then(response =>{
      console.log('LISTADO DE CONTRATOS',response);
      this.contratos = response;
    })
    .catch(err =>{
      console.log('ERROR AL LISTAR CONTRATOS', err);
})


  }

}

angular.module('contratista2017App')
  .component('contratosList', {
    templateUrl: 'app/contratos/contratos-list/contratos-list.html',
    controller: ContratosListComponent,
    controllerAs:'vm'
  });

})();
