'use strict';
(function(){

class LoginComponent {
  constructor(AuthService, $scope) {
    this.AuthService = AuthService;
    this.err = undefined;
    this.$scope = $scope;
  }
  login(){
    console.log('DATOS DE LOGIN ',this.user);
  	this.AuthService.login(this.user)
      .then(res => {

      }, err => {
        console.log('ERROR DESDE AUTH ', err);
        this.err = err;
        this.$scope.$apply();
      })
  }
}

//LoginComponent.$inject = ['AuthService'];

angular.module('contratista2017App')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
