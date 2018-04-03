'use strict';

(function() {

class MainController {

  constructor($http, AuthService) {
    this.$http = $http;
    this.awesomeThings = [];
    this.AuthService = AuthService;
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
    this.AuthService.isAdmin();
  }
}

angular.module('contratista2017App')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'vm'
  });

})();
