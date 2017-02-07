'use strict';

// It is just like saying "get this module and create a controller"
angular.module('myApp.view3').controller('viewModuleController2',
    ['$scope', '$http', function ($scope, $http) {
        $scope.format = 'M/d/yy h:mm:ss a';
        $scope.items = [{
            name: 'burger',
            price: '2.99'
        }, {
            name: 'pizza',
            price: '3.99'
        }, {
            name: 'French Fries',
            price: '1.50'
        }];

        // Reset new data model
        $scope.Reset = function () {
            $scope.price = '';
            $scope.newName = '';
        },
            $scope.cart = [];
        $scope.totalPrice = 0;
        $scope.removeFrmCart = function (item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
            this.cart.forEach(function (item) {
                $scope.totalPrice -= parseFloat(item.price);
            });
        },
            $scope.addToCart = function () {
                $scope.cart.push(this.item);
                $scope.totalPrice = 0;
                this.cart.forEach(function (item) {
                    $scope.totalPrice += parseFloat(item.price);
                });
            }

    }]);