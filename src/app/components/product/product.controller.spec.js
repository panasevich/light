(function () {
    'use strict';

    describe('controller: ProductController', function() {
        var $controller, vm, UserService;
        beforeEach(module('testApp', function($provide){
            UserService = jasmine.createSpyObj("UserService", ["logIn"]);

            $provide.value("UserService", UserService);
        }));

        beforeEach(inject(function($rootScope, _$controller_, _UserService_){
            vm = $rootScope.$new();
            UserService = _UserService_;
            $controller = _$controller_("ProductController",{
                $scope: vm,
                UserService: UserService
            });
        }));

        it("should have a looggrdIn property", function () {
            expect($controller.max).toBe(5);
        });

        it("Should check the UserService login method", function(){
            expect(UserService.logIn).toBeDefined();
        });

    });
})();
