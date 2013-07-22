'use strict';


// Declare app level module which depends on filters, and services
angular.module('FG.Alerts', ['myApp.filters', 'myApp.services', 'myApp.directives', 'FG.Alerts.controllers','FG.Alerts.Factory']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'Alerts'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
