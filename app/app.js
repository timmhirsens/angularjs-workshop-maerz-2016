'use strict';

angular.module('workshop', ['ngComponentRouter'])
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
      { path: '/', component: 'home' },
      { path: '/colorpicker', component: 'colorpicker' }
    ]
  });
