'use strict';

angular.module('myBoardApp')
  .directive('widget', function () {
    return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    scope:{
	      id: '@',
	      title: '@',
	      icon: '@'
	    },
			template: '<div id="widget-{{id}}" class="widget"><div class="widget-header"><i class="icon-{{icon}}" ng-show="{{icon}}"></i><h3>{{title}}</h3></div>'+
	              '<div class="widget-content" ng-transclude></div></div>',
			link: function postLink(scope, element, attrs) {
	      var widgetTitle = element.find('.widget-header'),
	          opened = false;

						widgetTitle.bind('click', toggle);

				// Toggle the closed/opened state
				function toggle() {
	        opened = !opened;
					element.find('.widget-content').slideToggle();
					element.removeClass( opened ? 'closed' : 'opened');
					element.addClass( opened ? 'opened' : 'closed');
				}

			}
		};
  });