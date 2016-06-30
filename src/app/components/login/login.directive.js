(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('login', login);

    /** @ngInject */
    function login() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/login/login.html',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

})();
