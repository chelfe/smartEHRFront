'use strict';

describe('Controller Tests', function() {

    describe('DocumentMed Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockDocumentMed, MockSourceMed;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockDocumentMed = jasmine.createSpy('MockDocumentMed');
            MockSourceMed = jasmine.createSpy('MockSourceMed');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'DocumentMed': MockDocumentMed,
                'SourceMed': MockSourceMed
            };
            createController = function() {
                $injector.get('$controller')("DocumentMedEhrDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'hhcFrontH2App:documentMedUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
