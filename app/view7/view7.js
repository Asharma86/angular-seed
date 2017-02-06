'use strict';

angular.module('myApp.view7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'MainCtrl'
  });
}])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.name = 'World';
  }])
  .directive("foodiee", function() {
  return {
    restict: "E",
    scope: {},
    template: "<div class='row card col-md-10'>FOODIEE</div>",

    controller: function($scope) {
      $scope.tastes = [];

      this.addSpice = function() {
        $scope.tastes.push("Spicy");
      };
      this.addTang = function() {
        $scope.tastes.push("Tangy");
      };
      this.addSweet = function() {
        $scope.tastes.push("Sweet");
      };

    },

    link: function(scope, element, attrs) {
      element.bind("mouseenter", function() {
        console.log(scope.tastes);
      });

    }
  }
})
.directive("spicy", function() {
  return {
    //require: "['foodiee','xyz']",
    require: "foodiee",
    link: function(scope, element, attrs, ctrlArray) {
      ctrlArray.addSpice();
    }
  }
})
.directive("tangy", function() {
  return {
    //require: "['foodiee','xyz']",
    require: "foodiee",
    link: function(scope, element, attrs, ctrlArray) {
      ctrlArray.addTang();
    }
  }
})
.directive("sweet", function() {
  return {
    //require: "['foodiee','xyz']",
    require: "foodiee",
    link: function(scope, element, attrs, ctrlArray) {
      ctrlArray.addSweet();
    }
  }
});