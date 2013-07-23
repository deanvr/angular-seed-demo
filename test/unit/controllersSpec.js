'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('FG.Alerts.controllers', ['FG.Alerts.Factory']));
    var ctrl, scope, fakeGetAlerts, fakeTimeout;
    
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        //Fake factory, no real 'success' method
        fakeGetAlerts = {
            fleets: function() {
                var data = {};

                data.Events = [{
                    "ContentId": 23,
                    "Title": "FIRM ORDER",
                    "Type": "Order",
                    "AircraftCount": 1,
                    "EventDate": "2013-04-25T23:00:00",
                    "PublishedDate": "2013-04-28T18:24:08.107",
                    "ManagerOrganisationId": "-605",
                    "ManagerOrganisationName": "Emirates",
                    "Builder": "Airbus",
                    "Series": "A320",
                    "EngineType": "",
                    "Thumbnail": "https://flight-images-systest.s3.amazonaws.com/images/tailfin-logos2817.png",
                    "AltText": "Air New ZealandTailfin Logo",
                    "DeliveryDate": "2018-01-12T23:00:00"
                }];

                return data;
            }
        };

        fakeTimeout = function(func, timeout) {
            return;
        };

        spyOn(fakeGetAlerts, 'fleets').andCallThrough();

        ctrl = $controller('Alerts', { $scope: scope, fleetTypesFactory: fakeGetAlerts, fakeTimeoutParam: fakeTimeout });
    }));
    
    it('Fleets returns an array of fleet alerts', inject(function () {
        expect(scope.fleetAlerts.length > 0).toBe(true);
    }));

    //it('api should be called', function () {
    //    expect(fakeGetAlerts.fleets).toHaveBeenCalled();
    //});
});





