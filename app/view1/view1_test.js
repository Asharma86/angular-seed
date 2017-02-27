'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($rootScope,$controller) {
      //spec body
      // To inject scope create a new rootscope object as angular creates
       var $scope = $rootScope.$new();
       $scope.Result = 0;
          $scope.add = function (a, b) {
            $scope.Result = parseInt(a) + parseInt(b);
          };
      var view1Ctrl = $controller('View1Ctrl',{
         $scope: $scope 
      });
      //expect(view1Ctrl).toBeDefined();
       $scope.Result = $scope.add(2,3);
       //Testing for controller
       expect(view1Ctrl).toBeDefined();
       //Testing for controller's function
      expect( $scope.Result).toEqual(5);
      //Testing for collection hardcoded value
      expect($scope.students[0].name).toEqual('srikar');
    }));

  });
});