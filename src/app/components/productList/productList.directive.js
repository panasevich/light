(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('productList', productList);

    /** @ngInject */
    function productList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/product/productList.html',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

})();
