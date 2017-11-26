'use strict';

describe('Service: objetoContrato', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var objetoContrato;
  beforeEach(inject(function (_objetoContrato_) {
    objetoContrato = _objetoContrato_;
  }));

  it('should do something', function () {
    expect(!!objetoContrato).to.be.true;
  });

});
