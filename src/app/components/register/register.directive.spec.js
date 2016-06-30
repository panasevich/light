(function () {
  'use strict';

  describe('directive register', function () {

    var el;

    beforeEach(module('testApp'));
    beforeEach(inject(function () {

      el = angular.element('<register></register>');

    }));

    it('should be compiled', function () {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
