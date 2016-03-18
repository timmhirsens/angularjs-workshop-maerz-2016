'use strict';

angular.module('workshop')
  .component('booksEdit', {
    templateUrl: 'components/books-edit/books-edit.html',
    controller: function(bookApi) {
      var $ctrl = this;

      $ctrl.save = function(book) {
        bookApi.updateBook(book).then(function() {
          alert('Success')
        })
      };

      $ctrl.$routerOnActivate = function(next, prev) {
        console.log(next.params.isbn);
        bookApi.getBook(next.params.isbn).then(function(book){
          $ctrl.book = book;
        })
      }
    }
  });
