(function () {
    'use strict';

    angular
        .module('testApp')
        .directive('register', register);

    /** @ngInject */
    function register() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/register/register.html',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

    }

})();
