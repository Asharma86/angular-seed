/**
 * 
 */
'use strict';

angular
    .module('myApp.view2', [ 'ngRoute' ])

    .config([ '$routeProvider', function($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl : 'view2/view2.html',
        controller : 'View2Ctrl',
        // service:'freakingService'
      });
    } ])
    .controller('View2Ctrl',['$scope','$http','weatherService',function($scope, $http,weatherService) {
              var appId = "928783ba8e649eafc20ac7d5b48e4928";
              /**
              Date Parsor
              **/
              $scope.parseDate = function(time) {
                return new Date(time * 1000);
              };
              /**
              Validation for null and message for the appropriate error
              **/
              $scope.isNullOrEmptyOrUndefined = function(value) {
                if (value === "" || value === null
                    || typeof value === "undefined") {
                  return true;
                } else {
                  return false;
                }
              }
              $scope.myFunct = function(keyEvent) {
                var valueBolean = $scope.isNullOrEmptyOrUndefined($scope.city);
                $scope.msg=" ";
                if (keyEvent.which === 13 && valueBolean === false) {
                  $scope.go();
                }else if(valueBolean === true)
                {
                  $scope.msg="Please enter a value";
                }
              }
              $scope.iconBaseUrl  = "http://openweathermap.org/img/w/";
                  // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };
              /**
              Message to retrieve weather based on user input
              **/
              /* return promise from getResponders function, & when it gets resolved it should return response.data from that function.*/
              $scope.go = function() {
                var data= weatherService.getWeather($scope.city).then( function(data){
                    $scope.temps = data.list;
                   $scope.inputInformationName = data.city.name;
                   $scope.inputInformationCountry = data.city.country;
                });
              }
            } ]);