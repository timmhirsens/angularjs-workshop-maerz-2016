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

    return {
      // public
      getBooks: getBooks
    }
  });
