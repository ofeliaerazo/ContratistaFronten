'use strict';
(function(){

class ContratosListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('contratista2017App')
  .component('contratosList', {
    templateUrl: 'app/contratos/contratos-list/contratos-list.html',
    controller: ContratosListComponent,
    controllerAs:'vm'
  });

})();
