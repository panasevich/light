(function () {
  'use strict';

  describe('directive product', function () {

    var el;

    beforeEach(module('testApp'));
    beforeEach(inject(function () {

      el = angular.element('<product></product>');

    }));

    it('should be compiled', function () {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
