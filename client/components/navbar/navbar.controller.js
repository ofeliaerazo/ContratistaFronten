'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }
];

  isCollapsed = true;
  //end-non-standard
  i
  constructor() {
    }
}

angular.module('contratista2017App')
  .controller('NavbarController', NavbarController);
