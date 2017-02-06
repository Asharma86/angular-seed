'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'PhoneListController'
  });
}])

.controller('PhoneListController',['$http', '$scope', function($http, $scope) {
    
  $http.get('view4/phones.json').then(function(response) {
  	$scope.phones = response.data;
  });
}]);