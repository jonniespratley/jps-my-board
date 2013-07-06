'use strict';

describe('Service: HealthService', function () {

  // load the service's module
  beforeEach(module('myBoardApp'));

  // instantiate service
  var HealthService;
  beforeEach(inject(function (_HealthService_) {
    HealthService = _HealthService_;
  }));

  it('should do something', function () {
    expect(!!HealthService).toBe(true);
  });

});
