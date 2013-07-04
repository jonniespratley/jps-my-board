'use strict';

angular.module('myBoardApp')
  .controller('HealthCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		
		$scope.weeklyData = {
			labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
			datasets : [
				
					//Calorie intake - daily calories consumed
					{
						label: 'Calories Consumed',
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(61,139,244,.8)",
						data : [2848,2102,1340,1409,1956,2217,1210]
					},
						//Physical activity - daily burned calories
						{
							label: 'Calories Burned',
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(251,131,139,1)",
							data : [635,529,190,286,256,400,210]
						}
				]
			};
			
			
 
			$scope.foodgroupsData = {
				labels : ["Fats, Oils, Sugars","Dairy","Protein Foods","Vegetables","Fruits","Grains"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [1, 2, 3, 5, 3, 11]
					},
					{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [0, 1, 2, 3, 1, 5]
					}
				]
			}
  });
