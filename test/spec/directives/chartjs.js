'use strict';

describe('Directive: chartjs', function () {
  beforeEach(module('myBoardApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<chartjs></chartjs>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the chartjs directive');
  }));
});
