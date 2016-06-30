(function() {
    'use strict';

    describe('product service', function() {
        var ProductService;
        var $httpBackend;

        beforeEach(module('testApp'));
        beforeEach(inject(function(_ProductService_, _$httpBackend_) {
            ProductService = _ProductService_;
            $httpBackend = _$httpBackend_;
        }));

        it('should be registered', function() {
            expect(ProductService).not.toEqual(null);
        });

        describe('apiHost variable', function() {
            it('should exist', function() {
                expect(ProductService.apiHost).not.toEqual(null);
            });
        });

        describe('ProductService getAll function', function() {
            it('should exist', function() {
                expect(ProductService.getAll).not.toEqual(null);
            });

            it('should return data', function() {
                $httpBackend.when('GET',  ProductService.apiHost + 'products/');
                $httpBackend.expect('GET', ProductService.apiHost + 'products/').respond(200, [{
                    "id": 1,
                    "title": "product1",
                    "img": "img1.png",
                    "text": "lorem ipsum 1"
                }]);
                var data;
                ProductService.getAll(1).then(function(fetchedData) {
                    data = fetchedData;
                });
                $httpBackend.flush();
                expect(data).toEqual(jasmine.any(Array));
                expect(data.length === 1).toBeTruthy();
                expect(data[0]).toEqual(jasmine.any(Object));
            });

        });
        describe('ProductService getReviews function', function() {
            it('should exist', function() {
                expect(ProductService.getReviews).not.toEqual(null);
            });

            it('should return data', function() {
                $httpBackend.when('GET',  ProductService.apiHost + 'reviews/');
                $httpBackend.expect('GET', ProductService.apiHost + 'reviews/1').respond(200, [{
                    "id": 1,
                    "title": "product1",
                    "img": "img1.png",
                    "text": "lorem ipsum 1"
                }]);
                var data;
                ProductService.getReviews(1).then(function(fetchedData) {
                    data = fetchedData;
                });
                $httpBackend.flush();
                expect(data).toEqual(jasmine.any(Array));
                expect(data.length === 1).toBeTruthy();
                expect(data[0]).toEqual(jasmine.any(Object));
            });

        });
    });
})();
