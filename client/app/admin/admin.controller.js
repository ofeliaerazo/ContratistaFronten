'use strict';
(function(){

class AdminComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('contratista2017App')
  .component('admin', {
    templateUrl: 'app/admin/admin.html',
    controller: AdminComponent, 
    controllerAs: 'vm'
  });

})();
