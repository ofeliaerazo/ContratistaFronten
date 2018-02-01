'use strict';

describe('Service: crp', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var crp;
  beforeEach(inject(function (_crp_) {
    crp = _crp_;
  }));

  it('should do something', function () {
    expect(!!crp).to.be.true;
  });

});
