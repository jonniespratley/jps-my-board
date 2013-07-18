'use strict';

angular.module('myBoardApp').controller('HealthCtrl', function($scope, $rootScope, parse, ParseService, App) {
	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

	$scope.currentDate = new Date();

	$scope.colors = {
		grains : '#CB662E',
		vegetables : '#54B631',
		fruits : '#E33B54',
		dairy : '#4D90D1',
		protein : '#7D62A3',
		allowed : '#468847',
		used : '#f89406',
		remaining : '#3a87ad'
	};

	$scope.weeklyData = {
		labels : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets : [

		//Calorie intake - daily calories consumed
		{
			label : 'Calories Consumed',
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(61,139,244,.8)",
			data : [2848, 2102, 1340, 1409, 1956, 2217, 1210]
		},
		//Physical activity - daily burned calories
		{
			label : 'Calories Burned',
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(251,131,139,1)",
			data : [635, 529, 190, 286, 256, 400, 210]
		}]
	};

	$scope.dailyCaloriesLimit = 3000;
	$scope.dailyCaloriesUsed = 230;
	$scope.dailyCaloriesRemaining = $scope.dailyCaloriesLimit - $scope.dailyCaloriesUsed;

	//Daily Calorie Limits
	$scope.dailyCalorieLimitsData = [{
		value : $scope.dailyCaloriesLimit,
		color : '#468847'
	}, {
		value : $scope.dailyCaloriesUsed,
		color : '#f89406'
	}, {
		value : $scope.dailyCaloriesRemaining,
		color : '#3a87ad'
	}];

	/* ======================[ @TODO:
	//Grains
	rgba(212,109,40,0.5)

	//Vegies
	rgba(99,191,64,1)

	//Fruits
	rgba(235,84,103,1)

	//Dairy
	rgba(94,163,218,1)

	//Proteins
	rgba(104,82,146)

	//Oils
	rgba(238,176,34)
	]====================== */

	//Health user
	$scope.user = {
		name : 'Guest',
		calories : 3000,
		age : 26,
		weight : 180,
		height : "6'1",
		activity : 60,
		gender : 'male',
		username : 'guest'
	};

	//Days in the week
	$scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	//Meals in the week
	$scope.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

	//Calculated by users height and weight, units in ounces.
	$scope.dailyFoodgroupTargets = {
		grains : 10,
		vegetables : 32,
		fruits : 20,
		dairy : 24,
		proteins : 7,
		oils : 1
	};

	$scope.dailyFoodgroupsData = {
		labels : ['Monday'],
		datasets : [
		//Grains
		{
			fillColor : "rgba(212,109,40,0.5)",
			strokeColor : "rgba(212,109,40,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [8]
		},

		//Vegies
		{
			fillColor : "rgba(99,191,64,0.5)",
			strokeColor : "rgba(99,191,64,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [12]
		},

		//Fruits
		{
			fillColor : "rgba(235,84,103,0.5)",
			strokeColor : "rgba(235,84,103,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [23]
		},

		//Dairy
		{
			fillColor : "rgba(94,163,218,0.5)",
			strokeColor : "rgba(94,163,218,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [7]
		},

		//Proteins
		{
			fillColor : "rgba(104,82,146, 0.5)",
			strokeColor : "rgba(104,82,146, 1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [8]
		}]
	}

	//Activity object
	$scope.activity = {
		title : 'Light jog',
		body : 'Ran a light jog around the block.',
		date : new Date(),
		duration : 15,
		calories : 250,
		intensity : 'Low',
		user_id : 1
	};

	//Food object
	$scope.food = {
		title : 'Cheeseburger',
		day : null,
		date : new Date(),
		meal : 'Lunch',
		calories : 250,
		foodgroups : {
			grains : 3,
			fruits : 0,
			vegetables : 5,
			dairy : 3,
			protein : 3,
			oils : 2
		},
		user_id : 1
	};
 
	$scope.filterBreakfast = {
		meal : 'breakfast'
	};
	$scope.filterLunch = {
		meal : 'lunch'
	};
	$scope.filterDinner = {
		meal : 'dinner'
	};

	$scope.params = {};

	//Current date.
	$scope.currentDate = new Date();

	//Current date filter, only show data for current date.
	$scope.dateFilter = $scope.currentDate.toDateString();

	//Watch when the currentDate changes and set the dateFilter to update the view.
	$scope.$watch('currentDate', function(newVal, oldVal) {
		$scope.dateFilter = newVal.toDateString();
	});
	//Health Controller
	$scope.Health = {
		data : {
			activities : null,
			foods : null,
			foodgroups : null,
			dailyActivityLimit : $scope.user.activity,
			dailyActivityUsed : 0,
			dailyCaloriesLimit : $scope.user.calories,
			dailyCaloriesUsed : 0,
			dailyCaloriesTotal : 0,
			dailyFoodgroupData : $scope.dailyFoodgroupsData
		},
		init : function() {
			App.init();
			
			this.getActivities();
			this.getFoods();
		},
		getActivities : function() {
			ParseService.get('Activity', null, function(data) {
				$scope.Health.data.activities = data;
			});
		},
		addActivity : function(obj) {
			ParseService.add('Activity', obj, function(obj) {
				angular.element('#addActivityModal').modal('toggle');
				$scope.Health.getActivities();
			});
		},
		getFoods : function() {
			ParseService.get('Food', null, function(data) {
				$scope.Health.data.foods = data;
			});
		},
		addFood : function(obj) {
			ParseService.add('Food', obj, function(obj) {
				angular.element('#addFoodModal').modal('toggle');
				$scope.Health.getFoods();
			});
		},
		destroyItem : function(model, o) {
			var c = confirm('Are you sure?');
			var id = o.id;
			var el = angular.element('#' + model.toLowerCase() + '-' + id);
			var self = this;
			if(c) {
				ParseService.destroy(model, o, function(data) {
					el.fadeOut();
					self.getData(model);
				}, function(e) {
					//alert(e.error);
				});
			}
		},
		selectActivity: function(o){
			this.activity = o;
			$scope.activity = o;
		},
		selectFood: function(o){
			this.food = o;
			$scope.food = o;
		},
		//Build the ui based on the user profile entries and the duration of the activities and the calories of the foods,
		buildUI : function() {

		},
		//Build the activity health chart
		buildActivityChart : function() {
			//activity.day = labels
			//activity.duration = values
			var data = {
				labels : ['Sun', 'Mon', 'Tue', 'Wed'],
				datasets : []
			};
		}
	};

	console.log($scope);
	window.Health = $scope.Health;

});
