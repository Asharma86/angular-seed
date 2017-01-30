'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope', 'courseImages', function($scope, courseImages) {
    $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];
    $scope.name = 'sandy';
    $scope.Courses = [' Java ', ' Angularjs ', ' Nodejs '];
    $scope.course = '';
    $scope.courselink = 'http://www.javatpoint.com/java-tutorial';

    $scope.getCourseImage = function(course) {
        return courseImages.getCourseImage(course);
    };
}]);