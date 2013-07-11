'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function ($scope, $rootScope, App) {
	App.init();
	
	$scope.user = {
		username: App.currentUser.get('username'),
		email: App.currentUser.get('email'),
	};
});