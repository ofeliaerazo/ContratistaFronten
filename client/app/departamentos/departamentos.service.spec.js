'use strict';

describe('Service: departamentos', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var departamentos;
  beforeEach(inject(function (_departamentos_) {
    departamentos = _departamentos_;
  }));

  it('should do something', function () {
    expect(!!departamentos).to.be.true;
  });

});
