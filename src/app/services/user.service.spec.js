(function () {
    'use strict';

    describe('user service', function () {
        var UserService;
        var $httpBackend;

        beforeEach(module('testApp'));
        beforeEach(inject(function (_UserService_, _$httpBackend_) {
            UserService = _UserService_;
            $httpBackend = _$httpBackend_;
        }));

        it('should be registered', function () {
            expect(UserService).not.toEqual(null);
        });

        describe('apiHost variable', function () {
            it('should exist', function () {
                expect(UserService.apiHost).not.toEqual(null);
            });
        });

        describe('UserService logIn function', function () {
            it('should exist', function () {
                expect(UserService.logIn).not.toEqual(null);
            });

            it('should post data', function () {
                var sentObj = {
                    "username": 'alex',
                    "password": 'alex'
                };
                $httpBackend.when('POST', UserService.apiHost + 'login/', sentObj);
                $httpBackend.expect('POST', UserService.apiHost + 'login/', sentObj).respond(200, {
                    "success": true,
                    "token": "f485d0bd70021cb76c27d9eea192a36ebcb144d5"
                });
                UserService.logIn('alex', 'alex');
                $httpBackend.flush();
            });

        });
        describe('UserService registration function', function () {
            it('should exist', function () {
                expect(UserService.postUser).not.toEqual(null);
            });

            it('should post data', function () {
                var sentObj = {
                    "username": 'alex',
                    "password": 'alex'
                };
                $httpBackend.when('POST', UserService.apiHost + 'register/', sentObj);
                $httpBackend.expect('POST', UserService.apiHost + 'register/', sentObj).respond(200, {
                    "success": true,
                    "token": "f485d0bd70021cb76c27d9eea192a36ebcb144d5"
                });
                UserService.postUser('alex', 'alex');
                $httpBackend.flush();
            });

        });
        describe('UserService post review function', function () {
            it('should exist', function () {
                expect(UserService.postReview).not.toEqual(null);
            });

            it('should post data', function () {
                var sentObj = {
                    "rate": 3,
                    "text": 'alex'
                };
                $httpBackend.when('POST', UserService.apiHost + 'reviews/1', sentObj);
                $httpBackend.expect('POST', UserService.apiHost + 'reviews/1', sentObj).respond(200, {
                    "success": true,
                    "token": "f485d0bd70021cb76c27d9eea192a36ebcb144d5"
                });
                UserService.postReview(3, 'alex','f485d0bd70021cb76c27d9eea192a36ebcb144d5',1);
                $httpBackend.flush();
            });

        });
    });
})();
