'use strict';

angular.module('workshop', ['ngComponentRouter'])
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
      // <a ng-link="['/BooksIndex']">Books</a>
      { path: '/',
        component: 'home',
        name: 'Home'
      },
      { path: '/books',
        component: 'booksIndex',
        name: 'BooksIndex'
      },
      { path: '/colorpicker',
        component: 'colorpicker',
        name: 'Colorpicker'
      }
    ]
  });
