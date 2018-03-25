(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('EmployeeEhrDetailController', EmployeeEhrDetailController);

    EmployeeEhrDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Employee', 'Job'];

    function EmployeeEhrDetailController($scope, $rootScope, $stateParams, previousState, entity, Employee, Job) {
        var vm = this;

        vm.employee = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('hhcFrontH2App:employeeUpdate', function(event, result) {
            vm.employee = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
