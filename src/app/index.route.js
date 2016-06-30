(function () {
    'use strict';

    angular
        .module('testApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('products', {
                url: '/products',
                templateUrl: 'app/components/productList/productList.html',
                controllerAs: 'vm',
                controller: 'ProductListController'
            })
            .state('product', {
                url: '/product/:id',
                templateUrl: 'app/components/product/product.html',
                controllerAs: 'vm',
                controller: 'ProductController'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/components/register/register.html',
                controllerAs: 'vm',
                controller: 'RegisterController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controllerAs: 'vm',
                controller: 'LoginController'
            });

        $urlRouterProvider.otherwise('/products');
    }

})();
