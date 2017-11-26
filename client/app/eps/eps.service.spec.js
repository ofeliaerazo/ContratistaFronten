'use strict';

describe('Service: eps', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var eps;
  beforeEach(inject(function (_eps_) {
    eps = _eps_;
  }));

  it('should do something', function () {
    expect(!!eps).to.be.true;
  });

});
