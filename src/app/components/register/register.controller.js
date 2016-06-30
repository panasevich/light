(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(UserService) {
        var vm = this;

        vm.signUp = function (params) {
            UserService.postUser(params.name, params.pass);
        };
    }
})();
