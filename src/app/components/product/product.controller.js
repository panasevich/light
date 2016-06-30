(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('ProductController', ProductController);

    /** @ngInject */
    function ProductController(ProductService, $stateParams, $cookies, UserService, $state) {
        var vm = this;
        vm.product = [];
        vm.reviews = [];
        vm.rate = 3;
        vm.max = 5;
        vm.logged = $cookies.get('Authorization');

        function getOneProduct(id) {
            return ProductService.getAll().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) return vm.product.push(data[i]);
                }
            });
        }

        function getReviews(id) {
            return ProductService.getReviews(id).then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].product == id) {
                        vm.reviews.push(data[i]);
                    }
                }
                return vm.reviews;
            })
        }

        vm.reviewAdd = function (params) {
            UserService.postReview(params.rate, params.text, $cookies.get('Authorization'), $stateParams.id);
        };

        if (vm.logged) {
            vm.addToggle = function () {
                vm.toggle = !vm.toggle;
            };
        } else {
            vm.addToggle = function () {
                alert("Login to leave a comment");
                $state.go('login', {}, {reload: true});
            };
        }

        getOneProduct($stateParams.id);
        getReviews($stateParams.id);
    }
})();
