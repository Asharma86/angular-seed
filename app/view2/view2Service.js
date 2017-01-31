'use strict';
angular.module('myApp.view2').factory('weatherService',['$http', function($http) {
	var result= {};
	result.getWeather = function(city){
		var myUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&APPID=928783ba8e649eafc20ac7d5b48e4928";
		 return $http.get(myUrl).then(function(response) {
              return response.data;
            });
	}
    return  result;
}]);