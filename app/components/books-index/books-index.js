'use strict';

angular.module('workshop')
  .component('booksIndex', {
    templateUrl: 'components/books-index/books-index.html',
    controller: function(bookApi) {
      var $ctrl = this;

      bookApi.getBooks()
        .then(function successFn(books) {
          $ctrl.books = books;
        });

      $ctrl.searchFn = function(searchText) {
        return function(book) {
          if (!searchText) { return true; }

          return book.title.includes(searchText)
            || book.author.includes(searchText);
        }
      };

    }
  });



//this.books = [
//  { title: 'Effective JavaScript', author: 'Benjamin Blümchen' },
//  { title: 'Effective AngularJS',  author: 'Tim & Struppi' }
//]
