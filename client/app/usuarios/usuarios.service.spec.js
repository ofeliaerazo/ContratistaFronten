'use strict';

describe('Service: usuarios', function () {

  // load the service's module
  beforeEach(module('contratista2017App'));

  // instantiate service
  var usuarios;
  beforeEach(inject(function (_usuarios_) {
    usuarios = _usuarios_;
  }));

  it('should do something', function () {
    expect(!!usuarios).to.be.true;
  });

});
