'use strict';
angular.module('myBoardApp').controller('NetworkCtrl', function ($scope) {
/* ======================[ @TODO: 
<li>Facebook: 137 photos | 734 friends | 4 followers</li>
<li>Twitter: 1,309 TWEETS | 90 FOLLOWING | 101 FOLLOWERS</li>
<li>Instagram: 46 photos | 136 followers | 175 following</li>
 ]====================== */
	$scope.data = {
		networks: {
			facebook: {
				photos: 137,
				friends: 734,
				followers: 155
			},
			twitter: {
				tweets: 1309,
				following: 90,
				followers: 167
			},
			instagram: {
				photos: 46,
				followers: 146,
				following: 175
			}
		}
	};
	
	
	//Network Colors
	var instagramColor = '#F71A45', 
			facebookColor = '#788AB3', 
			twitterColor = '#3EBBF2';

	/* ======================[ @TODO: My Friends ]====================== */
	$scope.friendsChartData = [];
	$scope.buildFriendsChart = function(){
		$scope.friendsChartData.push({color: facebookColor, value: $scope.data.networks.facebook.followers, label: 'Facebook'});
		$scope.friendsChartData.push({color: instagramColor, value: $scope.data.networks.instagram.followers, label: 'Instagram'});
		$scope.friendsChartData.push({color: twitterColor, value: $scope.data.networks.twitter.followers, label: 'Twitter'});
	};
	
	/* ======================[ @TODO: My Trends ]====================== */
	$scope.trendsChartData = {
		labels: [],
		datasets : [
		//Facebook
			{
				fillColor : "rgba(120,138,179,0.5)",
				strokeColor : "rgba(120,138,179,.8)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			},
			//Insta
			{
				fillColor : "rgba(216,201,188,0.5)",
				strokeColor : "rgba(247,26,69,.8)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [28,48,40,19,96,27,100]
			},
			//twitter
			{
				fillColor : "rgba(73,200,245,0.5)",
				strokeColor : "rgba(73,200,245,.8)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [38,68,40,49,36,57,200]
			}
		]
	};
	
	$scope.buildTrendsChart = function(){
		angular.forEach($scope.data.networks, function(obj, key){

			console.log(key, obj);
						
			//set labels
			$scope.trendsChartData.labels.push(key);
			
			//set values
			angular.forEach(obj, function(value, name){
				console.log(name, value);
			});

		});
	};
	$scope.buildTrendsChart();


	/* ======================[ @TODO: My Activity ]====================== */

	$scope.activityChartData = {
		labels : [ "Following", "Friends","Followers","Photos"],
		datasets : [
		//facebook
			{
				fillColor : "rgba(120,138,179,0.5)",
				strokeColor : "rgba(120,138,179,1)",
				data : [53,65,59,90]
			},	
			//Instagram		
			{
				fillColor : "rgba(216,201,188,0.3)",
				strokeColor : "rgba(247,26,69,1)",
				data : [34,75,51,27]
			},
			//Twiiter
			{
				fillColor : "rgba(73,200,245,0.5)",
				strokeColor : "rgba(73,200,245,1)",
				data : [14,65,39,21]
			}
		]
	}






	$scope.init = function(){
		$scope.buildFriendsChart();
	}
	
	$scope.init();

	console.log($scope);
});