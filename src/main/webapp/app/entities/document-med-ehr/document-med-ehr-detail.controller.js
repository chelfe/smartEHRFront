(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('DocumentMedEhrDetailController', DocumentMedEhrDetailController);

    DocumentMedEhrDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'DocumentMed', 'SourceMed'];

    function DocumentMedEhrDetailController($scope, $rootScope, $stateParams, previousState, entity, DocumentMed, SourceMed) {
        var vm = this;

        vm.documentMed = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hhcFrontH2App:documentMedUpdate', function(event, result) {
            vm.documentMed = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
