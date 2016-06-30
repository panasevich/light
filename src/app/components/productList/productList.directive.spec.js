(function () {
  'use strict';

  describe('directive productList', function () {

    var el;

    beforeEach(module('testApp'));
    beforeEach(inject(function () {

      el = angular.element('<productlist></productlist>');

    }));

    it('should be compiled', function () {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
