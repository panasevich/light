(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(UserService, $cookies, $location) {
        var vm = this;

        vm.loggedIn = $cookies.get("Authorization");

        vm.logIn = function (params) {
            UserService.logIn(params.name, params.pass);
        };

        vm.logOut = function () {
            $cookies.remove("Authorization");
            vm.loggedIn = $cookies.get("Authorization");
            $location.path('/');
        }
    }
})();
