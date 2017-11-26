'use strict';

describe('Component: UsuariosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var UsuariosUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsuariosUpdateComponent = $componentController('UsuariosUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
