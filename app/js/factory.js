angular.module('FG.Alerts.Factory', []).factory('getAlerts',function($http){
    var factory = {}
    factory.fleets = function(){
            return $http.get('http://flight.apiary.io/v1/Fleet/Alerts?apiToken=00000000-0000-0000-0000-000000000001&skip=0&take=7')
    };
    return factory;
});
