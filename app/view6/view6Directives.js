'use strict';
angular.module('myApp.view6', [])

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
      
    }
    
  }
});