'use strict';

describe('Service: CareerService', function () {

  // load the service's module
  beforeEach(module('myBoardApp'));

  // instantiate service
  var CareerService;
  beforeEach(inject(function (_CareerService_) {
    CareerService = _CareerService_;
  }));

  it('should do something', function () {
    expect(!!CareerService).toBe(true);
  });

});
