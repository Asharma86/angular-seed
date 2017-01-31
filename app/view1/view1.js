'use strict';

angular.module('myApp.view1', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl : 'view1/view1.html',
    controller : 'View1Ctrl'
  });
} ]).controller('View1Ctrl', [ '$scope', function($scope) {
  $scope.students = [ {
    name : 'srikar',
    address : '4223 Francis Mine'
  }, {
    name : 'laxman',
    address : '3065 Church Street.'
  }, {
    name : 'kaushik',
    address : '1177 Bryan Street'
  } ];
} ]);