'use strict';

angular.module('myBoardApp', [])
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
      .otherwise({
        redirectTo: '/'
      });
  });
