'use strict';

describe('Component: UsuariosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var UsuariosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsuariosCreateComponent = $componentController('UsuariosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
