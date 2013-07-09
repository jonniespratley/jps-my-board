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
      link: function preLink(scope, element, attrs, ngModel) {
					var id = '#chart_'+attrs.id,
								options = attrs.options, 
			          type = attrs.type,
			          data = angular.fromJson(attrs.data);




					//Watch for dat changes
					attrs.$observe('data', function(value) {
						data = angular.fromJson(attrs.data);
						if(data.length || data.labels){
							buildChart();
						}
						console.log('data has changed value to ', data);
					});
					

				function createChart(id, type, data, options){
					var ctx = angular.element(id).get(0).getContext("2d"), 
							myNewChart = null, 
							defaults = angular.extend({}, options),
							wrapper = angular.element(id).parent();
			        
						//Apply new height and width
			       scope.$apply(function(){
	            scope.width = wrapper.width();
	            scope.height = wrapper.height();
	          });
	
	
					
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
				      case 'polar':
				        myNewChart = new Chart(ctx).PolarArea(data, defaults);
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
