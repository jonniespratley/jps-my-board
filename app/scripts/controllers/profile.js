'use strict';
angular.module('myBoardApp').controller('ProfileCtrl', function ($scope, $rootScope, App) {
	App.init();
	
	$scope.user = App.user;
	
});