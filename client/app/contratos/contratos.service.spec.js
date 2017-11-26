'use strict';

describe('Service: contratos', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var contratos;
  beforeEach(inject(function (_contratos_) {
    contratos = _contratos_;
  }));

  it('should do something', function () {
    expect(!!contratos).to.be.true;
  });

});
