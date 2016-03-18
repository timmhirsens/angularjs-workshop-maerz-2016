'use strict';

angular.module('workshop')
  .directive('blacklist', function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        var blacklistArray = $parse(attrs.blacklist)(scope);

        ngModelCtrl.$validators.blacklist = function(value) {
          return blacklistArray.indexOf(value) === -1;
        }
      }
    }
  });





// $compile('<div>Hallo {{name}}</div>')
// $interpolate('Hallo {{name}}')
// $parse('name')({ name: 'Peter' })








