'use strict';

describe('Component: ContratosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var ContratosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContratosCreateComponent = $componentController('ContratosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
