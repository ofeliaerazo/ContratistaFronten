'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var auth;
  beforeEach(inject(function (_auth_) {
    auth = _auth_;
  }));

  it('should do something', function () {
    expect(!!auth).to.be.true;
  });

});
