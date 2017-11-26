'use strict';

describe('Component: UsuariosListComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var UsuariosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsuariosListComponent = $componentController('UsuariosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
