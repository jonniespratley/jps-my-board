'use strict';
/**
 *
 * @name - FormItem
 * @comment - This creates a form control group.
 * @usage
 * <formitem title="Label:" type="text">[Contents]</box>
 *
 */

angular.module('myBoardApp')
  .directive('formitem', function () {
    return {
			restrict : 'E',
			replace : true,
			transclude : true,
			scope : {
				title : '@',
				name : '@',
				value : '@',
				icon : '@',
				type : '@',
				model : '@',
				help : '@',
				placeholder : '@'
			},
			compile : function compile(tElement, tAttrs, transclude) {
				return {
					pre : function preLink(scope, iElement, iAttrs, controller) {
						//	console.log('pre', scope, iElement, iAttrs);
					},
					post : function postLink(scope, iElement, iAttrs, controller) {
						//	console.log('post', scope, iElement, iAttrs);
					}
				}
			},
			link : function postLink(scope, iElement, iAttrs) {
				//console.log('postLink', scope, iElement, iAttrs);
			},
			template : '<div class="control-group">' + '<div class="control-label"><label for="{{name}}">{{title}} </label></div>' + '<div class="controls" ng-transclude>' + '</div>' + '</div>'
		};
		
  });
