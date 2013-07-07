'use strict';

angular.module('myBoardApp', ['ngResource', 'ui', '$strap.directives'])
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
      .otherwise({
        redirectTo: '/'
      });
  });
