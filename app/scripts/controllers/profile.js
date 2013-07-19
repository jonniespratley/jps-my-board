'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function($scope, $rootScope, $http, App) {
	App.init();
	App.user = {
		username : App.currentUser.get('username'),
		email : App.currentUser.getEmail() ? App.currentUser.getEmail() : App.currentUser.get('email'),
		gender : App.currentUser.get('gender'),
		height : App.currentUser.get('height'),
		name : App.currentUser.get('name'),
		calories : App.currentUser.get('calories'),
		activity : App.currentUser.get('activity'),
		weight : App.currentUser.get('weight'),
		twitter : App.currentUser.get('twitter'),
		facebook : App.currentUser.get('facebook'),
		klout : App.currentUser.get('klout')
	};
	App.user.icon = 'http://gravatar.com/avatar/' + calcMD5(App.user.email) + '?s=35.png';
	App.user.avatar = 'http://gravatar.com/avatar/' + calcMD5(App.user.email) + '?s=250.png'
	$scope.user = App.user;
	
	$scope.saveUser = function(user){
		App.saveUser(user);
	}
	
	/**
	 * Make a call to klouts api to get the user id based on service.
	 */
	$scope.getKloutId = function(username){
		$http.jsonp('http://api.klout.com/v2/identity.json/twitter?', {params: {
			callback: 'JSON_CALLBACK',
			screenName: username, 
			key: 'yzk3cfc5wtang9a928cqa285'
		}}).success(function(data){
			console.log(data);
		});
		//http://api.klout.com/v2/identity.json/twitter?key=yzk3cfc5wtang9a928cqa285&screenName=jonniespratley
	}
});