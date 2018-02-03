'use strict';

class NavbarController {
  //start-non-standard
  constructor(AuthService){

      this.isCollapsed = true;
      this.AuthService = AuthService; //igual que el factory de authService.
        
      this.menu = [{
        'title': 'Home',
        'state': 'main'
      }]; 
    
  }



}

NavbarController.$inject = ['AuthService']

  angular.module('contratista2017App')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });