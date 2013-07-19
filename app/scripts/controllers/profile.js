'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function ($scope, $rootScope, App) {
	App.init();
	App.user = {
		username : App.currentUser.get('username'),
		email : App.currentUser.getEmail() ?  App.currentUser.getEmail(): App.currentUser.get('email'),
		gender : App.currentUser.get('gender'),
		height : App.currentUser.get('height'),
		name : App.currentUser.get('name'),
		calories : App.currentUser.get('calories'),
		activity : App.currentUser.get('activity'),
		weight : App.currentUser.get('weight')
	};
	App.user.icon = 'http://gravatar.com/avatar/' + calcMD5(App.user.email) + '?s=35.png';
	App.user.avatar = 'http://gravatar.com/avatar/' + calcMD5(App.user.email) + '?s=250.png'
	$scope.user = App.user;
	
});