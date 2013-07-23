'use strict';

/* Controllers */

angular.module('FG.Alerts.controllers', []).
    controller('Alerts', ['$scope','getAlerts','$timeout', function($scope,getAlerts,$timeout) {

         var last = null;
        (function alerts() {

            getAlerts.fleets().success(function(data) {
                // console.log(data)
                var events = data.Events;
                if (!last) {
                    $scope.fleetAlerts = events;
                    console.log('first');

                } else {
                    if (last.getTime() !== (new Date(events[0].PublishedDate)).getTime()) {
                        console.log('new');
                        console.log(new Date(events[0].PublishedDate));
                        console.log(last);

                        events.forEach(function(e) {
                            if (last < new Date(e.PublishedDate)) {
                                $scope.fleetAlerts.unshift(e);


                            }

                        });


                    } else {
                        // console.log('nothing new');
                    }

                }
                last = new Date(events[0].PublishedDate);

                $timeout(alerts, 5000);
            }).error(function() {
                console.log('error');
            });
        })();


    }]);
 