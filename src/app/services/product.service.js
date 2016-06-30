(function() {
  'use strict';

  angular
      .module('testApp')
      .factory('ProductService', ProductService);

  /** @ngInject */
  function ProductService($log, $http) {
    var apiHost = 'https://smktesting.herokuapp.com/api/';

    var service = {
      apiHost: apiHost,
      getAll: getAll,
      getReviews: getReviews
    };

    return service;

    function getAll() {

      return $http.get(apiHost+'products/')
          .then(getProductsComplete)
          .catch(getProductsFailed);

      function getProductsComplete(response) {
        return response.data;
      }

      function getProductsFailed(error) {
        $log.error('XHR Failed for getProducts.\n' + angular.toJson(error.data, true));
      }
    }
    function getReviews(id){
      return $http.get(apiHost+'reviews/'+id)
          .then(getProductsComplete)
          .catch(getProductsFailed);

      function getProductsComplete(response) {
        return response.data;
      }

      function getProductsFailed(error) {
        $log.error('XHR Failed for getProducts.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
