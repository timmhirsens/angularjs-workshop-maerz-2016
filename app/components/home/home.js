'use strict';

angular.module('workshop')
  .component('home', {
    templateUrl: 'components/home/home.html',
    controller: function($scope, $parse) {
      var $ctrl = this;
      $ctrl.g = 50;
      $ctrl.b = 200;

      $ctrl.logColors = function(r, g, b) {
        console.log('R:', r, 'G:', g, 'B:', b);
        $ctrl.b = 0;
      };

    }
  });
