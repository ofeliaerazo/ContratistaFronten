'use strict';

describe('Service: tipoContrato', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var tipoContrato;
  beforeEach(inject(function (_tipoContrato_) {
    tipoContrato = _tipoContrato_;
  }));

  it('should do something', function () {
    expect(!!tipoContrato).to.be.true;
  });

});
