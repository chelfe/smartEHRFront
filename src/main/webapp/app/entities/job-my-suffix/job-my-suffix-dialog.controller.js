(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('JobMySuffixDialogController', JobMySuffixDialogController);

    JobMySuffixDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Job', 'Employee'];

    function JobMySuffixDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Job, Employee) {
        var vm = this;

        vm.job = entity;
        vm.clear = clear;
        vm.save = save;
        vm.employees = Employee.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.job.id !== null) {
                Job.update(vm.job, onSaveSuccess, onSaveError);
            } else {
                Job.save(vm.job, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hhcFrontH2App:jobUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
