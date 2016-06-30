(function () {
    'use strict';

    describe('directive login', function () {

        var el;

        beforeEach(module('testApp'));
        beforeEach(inject(function () {

            el = angular.element('<login></login>');

        }));

        it('should be compiled', function () {
            expect(el.html()).not.toEqual(null);
        });

    });
})();
