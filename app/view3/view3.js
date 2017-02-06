'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'PersonListController'
  });
}])

.controller('PersonListController', function PersonListController($scope) {
  $scope.persons = [
    {
      name: 'Siva Kumar',
      country:'India',
      phone: '99908033184'
    }, {
      name: 'Prasad',
      country:'Singpoor',
      phone: '9032536397'
    }, {
      name: 'Jhone',
      country: 'USA',
      phons: '8475912441'
    }
  ];
});
