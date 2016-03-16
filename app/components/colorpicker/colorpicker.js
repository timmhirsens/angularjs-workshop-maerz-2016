'use strict';

angular.module('workshop')
  .component('colorpicker', {
    templateUrl: 'components/colorpicker/colorpicker.html',
    bindings: {
      r: '@',
      g: '@',
      b: '='
    }
  });
