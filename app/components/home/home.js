'use strict';

angular.module('workshop')
  .component('home', {
    templateUrl: 'components/home/home.html',
    controller: function() {
      this.g = 50;
      this.b = 200;
    }
  });
