(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('ProductListController', ProductListController);

    /** @ngInject */
    function ProductListController(ProductService) {
        var vm = this;
        vm.products = [];
        function getProducts() {
            return ProductService.getAll().then(function(data) {
                vm.products = data;
                return vm.products;
            });
        }
        getProducts();

    }
})();
