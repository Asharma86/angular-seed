'use strict';

angular.module('myApp.view3', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/viewModule.html',
      controller:'viewModuleController'
    });
     $routeProvider.when('/view4', {
      templateUrl: 'view3/viewModule1.html',
      controller:'viewModuleController2'
    });
  }]).directive('myCustomer', function () {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });
