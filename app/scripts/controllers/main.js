'use strict';

angular.module('myBoardApp').controller('MainCtrl', function ($scope, $rootScope, ParseService, App) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$scope.chart1 = [
		  {
				value: 30,
				color:"#F38630"
			},
			{
				value : 50,
				color : "#E0E4CC"
			},
			{
				value : 100,
				color : "#69D2E7"
			}			
		];
		
		
		
		$scope.user = {
			username: '',
			password: '',
			email: null
		};

});
