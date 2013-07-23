angular.module('FG.Alerts.Factory', []).factory('getAlerts',function($http){
    var factory = {}
    factory.fleets = function(){
            return $http.get('http://api.flightgloballocal.rbidev.ds/v1/Fleet/Alerts?apiToken=4C959CCF-6F55-466A-A296-125248EE8DD7&skip=0&take=50')
    };
    return factory;
});
