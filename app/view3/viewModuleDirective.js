'use strict';
// It is just like saying "get this module and create a directive
angular.module('myApp.view3').directive('appVersion', ['$interval', 'dateFilter', function ($interval, dateFilter) {
  function link(scope, element, attrs) {
    var format,
      timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.appVersion, function (value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function () {
      $interval.cancel(timeoutId);
    });
    element.on('mouseover', function () {
      element.css({
        position: 'relative',
        backgroundColor: 'black',
        cursor: 'pointer',
        color: 'blue',
      });
    });
    element.on('mouseleave', function () {
      element.css({
        position: 'relative',
        backgroundColor: '',
        cursor: '',
        color: '',
      });
    });
    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function () {
      updateTime(); // update DOM
    }, 1000);

  }
  return {
    link: link
  };
}]).directive('myDialog', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'view3/my-dialog.html'
  };
}).directive('acrossDirective', function () {
  return {
    restrict: 'C',
    scope: {},
    link: function (scope, element, attrs) {
      element.addClass("underlineCls");
      element.on('mouseover', function () {
        element.css({
        textTransform: 'uppercase'
        });
      });
      element.on('mouseleave', function () {
        element.css({
        textTransform : 'capitalize'
        });
      });
    }
  };
});