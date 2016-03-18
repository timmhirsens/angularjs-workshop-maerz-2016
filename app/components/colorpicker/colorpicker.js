'use strict';

angular.module('workshop')
  .component('colorpicker', {
    templateUrl: 'components/colorpicker/colorpicker.html',
    transclude: true,
    bindings: {
      r: '@',
      g: '@',
      b: '=',
      callback: '&'
    }
  });
