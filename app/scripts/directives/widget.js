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
	      icon: '@',
				modal: '@',
				onClick: '='
	    },
			template: '<div id="widget-{{id}}" class="widget"><div class="widget-header"><i class="icon-{{icon}}" ng-show="{{icon}}"></i><h3><span title="Click to toggle" class="title">{{title}} </span><a class="btn btn-mini" ng-click="onClick" ng-show="modal" data-toggle="modal" href="#{{modal}}" ><i class="icon-plus"></i></a></h3></div>'+
	              '<div class="widget-content" ng-transclude></div></div>',
			link: function postLink(scope, element, attrs) {
	      var widgetTitle = element.find('.widget-header .title'),
	          opened = true;

						widgetTitle.bind('click', toggle);

				// Toggle the closed/opened state
				function toggle(e) {
					var el = angular.element(e.currentTarget);
					if(el.attr('class') != 'btn'){
						opened = !opened;
						element.find('.widget-content').slideToggle();
						element.removeClass( opened ? 'closed' : 'opened');
						element.addClass( opened ? 'opened' : 'closed');
					}
				}

			}
		};
  });