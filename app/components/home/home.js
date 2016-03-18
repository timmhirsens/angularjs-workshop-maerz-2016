'use strict';

angular.module('workshop')
  .component('home', {
    templateUrl: 'components/home/home.html',
    controller: function($scope, $parse) {
      this.g = 50;
      this.b = 200;

      this.logColors = function(r, g, b) {
        console.log('R:', r, 'G:', g, 'B:', b)
      };

      //var result = $parse('$ctrl.logColors(r, g, b)')({ r: 10, g: 20, b: 30});
    }
  });
