'use strict';

angular.module('workshop')
  .directive('hyperClick', function() {
    return {
      restrict: 'A',
      controller: function($scope, $element, $attrs, $parse) {

        $element.on('click', function(event) {
          $scope.$apply(function() {
            $parse($attrs.hyperClick)($scope, { $event: event });
            console.log('Hyper Hyper');
          });
        });

      }
    }
  });
