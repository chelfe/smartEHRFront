(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceMedEhrDialogController', SourceMedEhrDialogController);

    SourceMedEhrDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'SourceMed'];

    function SourceMedEhrDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, SourceMed) {
        var vm = this;

        vm.sourceMed = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.sourceMed.id !== null) {
                SourceMed.update(vm.sourceMed, onSaveSuccess, onSaveError);
            } else {
                SourceMed.save(vm.sourceMed, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hhcFrontH2App:sourceMedUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
