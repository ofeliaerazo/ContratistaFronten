'use strict';

describe('Service: pension', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var pension;
  beforeEach(inject(function (_pension_) {
    pension = _pension_;
  }));

  it('should do something', function () {
    expect(!!pension).to.be.true;
  });

});
