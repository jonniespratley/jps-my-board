'use strict';

describe('Service: NetworkService', function () {

  // load the service's module
  beforeEach(module('myBoardApp'));

  // instantiate service
  var NetworkService;
  beforeEach(inject(function (_NetworkService_) {
    NetworkService = _NetworkService_;
  }));

  it('should do something', function () {
    expect(!!NetworkService).toBe(true);
  });

});
