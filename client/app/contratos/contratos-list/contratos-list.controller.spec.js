'use strict';

describe('Component: ContratosListComponent', function () {

  // load the controller's module
  beforeEach(module('contratista2017App'));

  var ContratosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContratosListComponent = $componentController('ContratosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
