'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Registrar Usuario',
      'state': 'usuarios-create'
    },
    {
      'title': 'Lista de Usuarios',
      'state': 'usuarios-list'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {}
}

angular.module('contratista2017App')
  .controller('NavbarController', NavbarController);