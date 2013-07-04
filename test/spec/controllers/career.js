'use strict';

describe('Controller: CareerCtrl', function () {

  // load the controller's module
  beforeEach(module('myBoardApp'));

  var CareerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CareerCtrl = $controller('CareerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
