'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'myController'
  });
}])
.controller('myController', ['$scope', function($scope) {
   
}])

.directive('simpleDir', function(){
  return {
    scope: {},
    restrict: "E",
    template: "Simple Directive - <input type='text' ng-model='exp'> {{exp}}",
    
    controller: function($scope){
      $scope.player = "Sachin!!"
    },
    
    link: function(scope, element, attrs){
      console.log(scope.player);
      
      console.log(attrs.player1);
      
      element.bind("mouseenter", function(){
        console.log("I am entering!!");
      });

      element.bind("click", function(){
        alert("I am Clikeing!!");
      });

      element.bind("mouseleave", function(){
        console.log("I am leaving!!");
      });
      
    }
    
  }
});