'use strict';

angular.module('myBoardApp')
  .controller('HealthCtrl', function ($scope, parse) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		
		
		
		
		$scope.colors = {
			grains: '#CB662E',
			vegetables: '#54B631',
			fruits: '#E33B54',
			dairy: '#4D90D1',
			protein: '#7D62A3',
			remaining: '#3a87ad',
			used: '#f89406',
			allowed: '#3a87ad'
		};
		
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
			
			$scope.dailyCaloriesLimit = 3000;
			$scope.dailyCaloriesUsed = 230;
			$scope.dailyCaloriesRemaining = $scope.dailyCaloriesLimit - $scope.dailyCaloriesUsed;
			
			//Daily Calorie Limits
			$scope.dailyCalorieLimitsData = [
				{ 
					value: $scope.dailyCaloriesLimit, 
					color: $scope.colors.allowed
				},
				{ 
					value : $scope.dailyCaloriesUsed, 
					color : $scope.colors.used
				},
				{ 
					value : $scope.dailyCaloriesRemaining, 
					color : $scope.colors.remainining
				}			
			];
			

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
			name: 'Guest',
			calories: 3000,
			age: 26,
			weight: 180,
			height: "6'1",
			activity: 60,
			gender: 'male',
			username: 'guest'
		};
	
		//Days in the week
		$scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		//Meals in the week
		$scope.meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
				
		//Calculated by users height and weight, units in ounces.
		$scope.dailyFoodgroupTargets = {
			grains: 10,
			vegetables: 32,
			fruits: 20,
			dairy: 24,
			proteins: 7,
			oils: 1
		};
		
		$scope.dailyFoodgroupsData = {
			labels : ['Grains', 'Vegetables', 'Fruits', 'Dairy', 'Proteins', 'Oils'],
			datasets : [
				//Monday
				{
					fillColor : "rgba(212,109,40,0.5)",
					strokeColor : "rgba(212,109,40,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [8, 23, 17, 13, 6, 2]
				},
				
				//Vegies
				{
					fillColor : "rgba(99,191,64,0.5)",
					strokeColor : "rgba(99,191,64,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0, 1, 2, 3, 1, 5]
				},
				//Fruites
				{
					fillColor : "rgba(235,84,103,0.5)",
					strokeColor : "rgba(235,84,103,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0, 1, 2, 3, 1, 5]
				},
				
				//Dairy
				{
					fillColor : "rgba(99,191,64,0.5)",
					strokeColor : "rgba(99,191,64,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0, 1, 2, 3, 1, 5]
				},
				
				//Proteins
				{
					fillColor : "rgba(104,82,146, 0.5)",
					strokeColor : "rgba(104,82,146, 1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0, 1, 2, 3, 1, 5]
				},
				
				//Oils
				{
					fillColor : "rgba(238,176,34, 0.5)",
					strokeColor : "rgba(238,176,34, 1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0, 1, 2, 3, 1, 5]
				}
			]
		}
		
		//Activity object
    $scope.activity = {
      title: 'Light jog',
      body: 'Ran a light jog around the block.',
      duration: 15,
      calories: 250,
      intensity: 'Low',
      user_id: 1
    };

		//Food object
		$scope.food = {
			title: 'Cheeseburger',
			day: null,
			meal: 'Lunch',
			calories: 250,
			foodgroups: {
				grains: 3,
				vegetables: 0.5,
				dairy: 0.3,
				protein: 2.3,
				oils: 0.2
			},
			user_id: 1
		};


			Parse.initialize("EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5", "stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD");
			
		 //Health Controller
		    $scope.Health = {
						data:{
							activities: null,
							foods: null,
							foodgroups: null,
							dailyActivityLimit: $scope.user.activity,
							dailyActivityUsed: 0,
							dailyCaloriesLimit: $scope.user.calories,
							dailyCaloriesUsed: 0,
							dailyCaloriesTotal: 0,
							dailyFoodgroupData: $scope.dailyFoodgroupsData
						},
						init: function(){
							this.getActivities();
							this.getFoods();
						},
						//Get activities
		        getActivities: function(){
		          new parse('EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5', 'stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD', 'Activity', function(data){
								$scope.$apply(function(){
									$scope.Health.data.activities = data;
								});
		            console.log(data);
							});
		        },
						//Add activity
		        addActivity: function(obj){
		          var ActivityObject = Parse.Object.extend("Activity");
		          var testObject = new ActivityObject();
		              testObject.save(obj, {
		              success: function(object) {
		                angular.element('#addActivityModal').modal('toggle');
		                $scope.Health.getActivities();
		              }
		          });
		        },
						//Get foods
						getFoods: function(){
		          new parse('EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5', 'stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD', 'Food', function(data){
								$scope.$apply(function(){
									$scope.Health.data.foods = data;
								});

		            console.log(data);
							});
		        },
		     		//Add food item
						addFood: function(obj){
		          var ParseObject = Parse.Object.extend('Food');
		          var svc = new ParseObject();
									svc.save(obj, {
		              success: function(object) {
		                angular.element('#addFoodModal').modal('toggle');
		                $scope.Health.getFoods();
		              }
		          });
		        },
						//Build the ui based on the user profile entries and the duration of the activities and the calories of the foods,
						buildUI: function(){
						}
					};

		
			
			
			
			
			console.log($scope);			
			
  });
