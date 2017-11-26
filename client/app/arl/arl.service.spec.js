'use strict';

describe('Service: arl', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var arl;
  beforeEach(inject(function (_arl_) {
    arl = _arl_;
  }));

  it('should do something', function () {
    expect(!!arl).to.be.true;
  });

});
