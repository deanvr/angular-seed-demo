'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('EventType', ['$scope', function($scope) {
    return function($scope) {
      return $scope.ManagerOrganisationId.substring(0,1);
    }
  }]);
