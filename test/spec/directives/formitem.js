'use strict';

describe('Directive: formitem', function () {
  beforeEach(module('myBoardApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<formitem></formitem>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the formitem directive');
  }));
});
