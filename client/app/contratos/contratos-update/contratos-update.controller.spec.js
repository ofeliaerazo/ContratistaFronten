'use strict';

describe('Component: ContratosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var ContratosUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContratosUpdateComponent = $componentController('ContratosUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
