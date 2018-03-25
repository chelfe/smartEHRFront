(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceMedEhrDetailController', SourceMedEhrDetailController);

    SourceMedEhrDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SourceMed'];

    function SourceMedEhrDetailController($scope, $rootScope, $stateParams, previousState, entity, SourceMed) {
        var vm = this;

        vm.sourceMed = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hhcFrontH2App:sourceMedUpdate', function(event, result) {
            vm.sourceMed = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
