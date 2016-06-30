(function() {
    'use strict';

    angular
        .module('testApp')
        .factory('UserService', UserService);

    /** @ngInject */
    function UserService($cookies, $http, $state) {
        var apiHost = 'http://smktesting.herokuapp.com/api/';

        var service = {
            apiHost: apiHost,
            postUser: postUser,
            logIn: logIn,
            postReview: postReview
        };

        return service;

        function logIn(name, pass) {
            $http({
                method: 'POST',
                url: apiHost+'login/',
                data: {"password": pass, "username": name}
            }).then(function (data) {
                if (data.data.success) {
                    $cookies.put('Authorization', 'Token ' + data.data.token);
                    $state.go('products', {}, {reload: true});
                    location.reload();
                }else {
                    alert(data.data.message);
                }

            });
        }
        function postReview(rate, text, header, id) {
            $http({
                method: 'POST',
                url: apiHost+'reviews/'+id,
                data: {"rate": rate, "text": text},
                headers: {'Authorization': header}
            }).then(function () {
                $state.go($state.current.name, {}, {reload: true})
            });
        }
        function postUser(name, pass) {
            $http({
                method: 'POST',
                url: apiHost+'register/',
                data: {"username": name, "password": pass}
            }).then(function (data) {
                if (data.data.success) {
                    alert('Registration complete');
                    $state.go('login', {}, {reload: true});
                }else {
                    alert(data.data.message);
                }
            });
        }
    }
})();
