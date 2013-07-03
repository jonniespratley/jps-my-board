'use strict';

angular.module('myBoardApp')
  .directive('chartjs', function () {
    return {
      restrict: 'E',
			replace: true,
			scope: {
	      id: '@',
	      title: '@',
	      width: '@',
	      height: '@',
	      options: '@',
	      data: '@'
			},
			template: '<div class="chartjs-wrap"><legend ng-show="{{title}}">{{title}}</legend><canvas id="chart_{{id}}" width="{{width}}" height="{{height}}">Content</canvas></div>',
      link: function postLink(scope, element, attrs) {
				
				var id = '#chart_'+attrs.id,
						options = attrs.options, 
	          type = attrs.type,
	          data = angular.toJson(attrs.data);
				 // watch the expression, and update the UI on change.
					scope.$watch(attrs.data, function(value) {
						data = angular.fromJson(attrs.data);
					  buildChart();
					});
				
				function createChart(id, type, data, options){
				
					console.log(id, type, data);
					var ctx = angular.element(id).get(0).getContext("2d"), 
							myNewChart = null, 
							defaults = angular.extend({}, options);

				    switch(type){
				      case 'line':
				        myNewChart = new Chart(ctx).Line(data, defaults);
				        break;
				      case 'bar':
				        myNewChart = new Chart(ctx).Bar(data, defaults);
				        break;
				      case 'doughnut':
				        myNewChart = new Chart(ctx).Doughnut(data, defaults);
				        break;
				      case 'pie':
				        myNewChart = new Chart(ctx).Pie(data, defaults);
				        break;
				      case 'radar':
				        myNewChart = new Chart(ctx).Radar(data, defaults);
				        break;        
				      default:
				        myNewChart = new Chart(ctx).Line(data, defaults);
				        break;
				    }  
				  return myNewChart;
				}


				function buildChart(){
						setTimeout(function(){
							createChart(id, type, data, options);
						}, 500);
				}
      }
    };
  });
