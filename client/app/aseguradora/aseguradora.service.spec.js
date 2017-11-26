'use strict';

describe('Service: aseguradora', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var aseguradora;
  beforeEach(inject(function (_aseguradora_) {
    aseguradora = _aseguradora_;
  }));

  it('should do something', function () {
    expect(!!aseguradora).to.be.true;
  });

});
