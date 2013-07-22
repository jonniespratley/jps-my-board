'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function($scope, $rootScope, $http, App) {
	App.init();

	$scope.user = App.user;

	$scope.saveUser = function(user) {
		App.saveUser(user, function(data){
			console.log(data);
			App.alert('success', 'Profile Updated', 'Your profile was saved! ');
		}, function(error){
			App.alert('error', 'Error '+ error.code, error.error);
		});
	}
	/**
	 * Make a call to klouts api to get the user id based on service.
	 */
	$scope.getKloutId = function(username) {
		$http.jsonp('http://api.klout.com/v2/identity.json/twitter?', {
			params : {
				callback : 'JSON_CALLBACK',
				screenName : username,
				key : 'yzk3cfc5wtang9a928cqa285'
			}
		}).success(function(data) {
			App.user.klout = data.id;
			App.saveUser(App.user);
			console.log(data);
		});
		//http://api.klout.com/v2/identity.json/twitter?key=yzk3cfc5wtang9a928cqa285&screenName=jonniespratley
	}
});
