'use strict';

describe('Service: tipoDocumento', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var tipoDocumento;
  beforeEach(inject(function (_tipoDocumento_) {
    tipoDocumento = _tipoDocumento_;
  }));

  it('should do something', function () {
    expect(!!tipoDocumento).to.be.true;
  });

});
