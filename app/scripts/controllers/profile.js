'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function ($scope, $rootScope, App) {
	App.init();
	
	$scope.user = {
		username: App.currentUser.getUsername(),
		email: App.currentUser.getEmail(),
		gender: App.currentUser.get('gender'),
		height: App.currentUser.get('height'),
		name: App.currentUser.get('name'),
		calories: App.currentUser.get('calories'),
		activity: App.currentUser.get('activity'),
		weight: App.currentUser.get('weight')
	};
});