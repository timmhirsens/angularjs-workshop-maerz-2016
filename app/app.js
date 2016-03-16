'use strict';

angular.module('workshop', [])
  .directive('colorpicker', function () {
    // Directive Definition Object
    return {
      restrict: 'E',
      templateUrl: 'components/colorpicker/colorpicker.html',
      scope: {
        r: '@',
        g: '@',
        b: '='
      }
    }
  });
