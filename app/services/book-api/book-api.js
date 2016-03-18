'use strict';

angular.module('workshop')
  .factory('bookApi', function($http) {
    // private
    var url = 'http://bookmonkey-api.angularjs.de/books';

    function extractData(response) {
      return response.data;
    }

    function getBooks() {
      return $http.get(url).then(extractData);
    }

    function getBook(isbn) {
      return $http.get(url + '/' + isbn).then(extractData);
    }

    function updateBook(book) {
      return $http.put(url + '/' + book.isbn, book).then(extractData);
    }

    return {
      // public
      getBooks: getBooks,
      getBook: getBook,
      updateBook: updateBook,
    }
  });
