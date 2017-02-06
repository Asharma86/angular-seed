'use strict';

// It is just like saying "get this module and create a controller"
angular.module('myApp.view3').controller('viewModuleController',
        [ '$scope', '$http', function($scope, $http) {
            $scope.format = 'M/d/yy h:mm:ss a';
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

            // Reset new data model
            $scope.Reset = function() {
                $scope.newAddress = '';
                $scope.newName = '';
            }
              $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
  $scope.greetings ="Hi there";
            // Add new data
            $scope.Add = function() {
                // Do nothing if no name is entered (blank)
                if (!$scope.newName)
                    return;
                // Add to main records
                $scope.students.push({
                    name : $scope.newName,
                    address : $scope.newAddress
                });
                // See $Scope.Reset...
                $scope.Reset();
                angular.element(document.querySelector('#idSidebar')).append('<div my-customer></div>');
            }

        } ]);