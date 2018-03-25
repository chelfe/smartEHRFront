(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceEhrDetailController', SourceEhrDetailController);

    SourceEhrDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Source'];

    function SourceEhrDetailController($scope, $rootScope, $stateParams, previousState, entity, Source) {
        var vm = this;

        vm.source = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hhcFrontH2App:sourceUpdate', function(event, result) {
            vm.source = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
