'use strict';

describe('Service: KiiService', function () {

  // load the service's module
  beforeEach(module('myBoardApp'));

  // instantiate service
  var KiiService;
  beforeEach(inject(function (_KiiService_) {
    KiiService = _KiiService_;
  }));

  it('should do something', function () {
    expect(!!KiiService).toBe(true);
  });

});
