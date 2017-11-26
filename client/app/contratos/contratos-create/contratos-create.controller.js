'use strict';
(function(){

class ContratosCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('contratista2017App')
  .component('contratosCreate', {
    templateUrl: 'app/contratos/contratos-create/contratos-create.html',
    controller: ContratosCreateComponent,
    controllerAs: 'vm'
  });

})();
