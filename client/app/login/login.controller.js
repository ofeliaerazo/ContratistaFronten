'use strict';
(function(){

class LoginComponent {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }
  login(){
  	this.AuthService.login(this.user);
  }
}

LoginComponent.$inject = ['AuthService'];

angular.module('contratista2017App')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
