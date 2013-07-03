'use strict';

describe('Controller: LifeCtrl', function () {

  // load the controller's module
  beforeEach(module('myBoardApp'));

  var LifeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LifeCtrl = $controller('LifeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
