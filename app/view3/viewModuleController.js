'use strict';

// It is just like saying "get this module and create a controller"
angular.module('myApp.view3').controller('viewModuleController',
        [ '$scope', '$http', function($scope, $http) {
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
            }

        } ]);