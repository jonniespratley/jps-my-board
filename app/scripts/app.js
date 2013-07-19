'use strict';

angular.module('myBoardApp', ['ngResource', 'ui', '$strap.directives', 'colorpicker.module']).config(function($routeProvider, $locationProvider) {
	var routeResolver = {
		delay : function($q, $timeout) {
			var delay = $q.defer();
			$timeout(delay.resolve, 500);
			return delay.promise;
		}
	};
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl',
		resolve : routeResolver
	}).when('/work', {
		templateUrl : 'views/work.html',
		controller : 'WorkCtrl',
		resolve : routeResolver
	}).when('/life', {
		templateUrl : 'views/life.html',
		controller : 'LifeCtrl',
		resolve : routeResolver
	}).when('/network', {
		templateUrl : 'views/network.html',
		controller : 'NetworkCtrl',
		resolve : routeResolver
	}).when('/career', {
		templateUrl : 'views/career.html',
		controller : 'CareerCtrl',
		resolve : routeResolver
	}).when('/health', {
		templateUrl : 'views/health.html',
		controller : 'HealthCtrl',
		resolve : routeResolver
	}).when('/about', {
		templateUrl : 'views/about.html',
		controller : 'AboutCtrl',
		resolve : routeResolver
	}).when('/callback', {
		templateUrl : 'views/callback.html',
		controller : 'CallbackCtrl',
		resolve : routeResolver
	}).when('/login', {
		templateUrl : 'views/login.html',
		controller : 'LoginCtrl'
	}).when('/signup', {
		templateUrl : 'views/signup.html',
		controller : 'SignupCtrl'
	}).when('/profile', {
		templateUrl : 'views/profile.html',
		controller : 'ProfileCtrl',
		resolve : routeResolver
	}).when('/oauth', {
		templateUrl : 'views/oauth.html',
		controller : 'OauthCtrl',
		resolve : routeResolver
	}).otherwise({
		redirectTo : '/'
	});
});

angular.module('myBoardApp').controller('AppCtrl', function($scope, $rootScope, ParseService, App, $location) {
	Parse.initialize("EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5", "stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD");
	$rootScope.cdn = 'http://482d8830b65aad08759c-061ea4bce065674c4dd94b6a107d8d5d.r97.cf1.rackcdn.com';

	window.App = $rootScope.App = App.init();

	if($location.host() === 'localhost') {
		App.debug = true;
	} else {
		App.debug = false;
	}

	angular.element(document).ready(function() {
		//display the document when everything loads.
		angular.element('body').fadeIn();
		angular.element('.colorpicker').colorpicker();
	});
});
