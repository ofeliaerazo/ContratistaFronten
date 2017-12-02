'use strict';
(function(){

class ContratosListComponent {
  constructor(contratosService) {
    this.contratosService = contratosService;
  }
  $onInit(){
    console.log(this.contratosService.query());
  }
}

angular.module('contratista2017App')
  .component('contratosList', {
    templateUrl: 'app/contratos/contratos-list/contratos-list.html',
    controller: ContratosListComponent,
    controllerAs:'vm'
  });

})();
