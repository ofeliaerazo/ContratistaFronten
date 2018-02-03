'use strict';
(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }
  login(){
    console.log('DATOS DE LOGIN ',this.user);
  	this.authService.login(this.user);
  }
}

LoginComponent.$inject = ['authService'];

angular.module('contratista2017App')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
