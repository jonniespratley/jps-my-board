'use strict';

angular.module('myBoardApp', ['ngResource', 'ui', '$strap.directives', 'colorpicker.module'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/life', {
        templateUrl: 'views/life.html',
        controller: 'LifeCtrl'
      })
      .when('/network', {
        templateUrl: 'views/network.html',
        controller: 'NetworkCtrl'
      })
      .when('/career', {
        templateUrl: 'views/career.html',
        controller: 'CareerCtrl'
      })
      .when('/health', {
        templateUrl: 'views/health.html',
        controller: 'HealthCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/callback', {
        templateUrl: 'views/callback.html',
        controller: 'CallbackCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/oauth', {
        templateUrl: 'views/oauth.html',
        controller: 'OauthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('myBoardApp').controller('AppCtrl', function ($scope, $rootScope, ParseService, App, $location) {
	Parse.initialize("EWJAR5Zkq2VI2XHfPe3vZnc1LYG5eDcbYt0dHwI5", "stymT2WbAK64RXXwhigTHg1HwxuhFAyOWBGXS2LD");
	$rootScope.cdn = 'http://482d8830b65aad08759c-061ea4bce065674c4dd94b6a107d8d5d.r97.cf1.rackcdn.com';
	
	window.App = $rootScope.App = App.init();
	
	if($location.host() === 'localhost'){
		App.debug = true;
	} else {
		App.debug = false;
	}
	
	
	angular.element(document).ready(function(){
		//display the document when everything loads.
		angular.element('body').fadeIn();
		angular.element('.colorpicker').colorpicker();
	});
	
});