(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceEhrDialogController', SourceEhrDialogController);

    SourceEhrDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Source'];

    function SourceEhrDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Source) {
        var vm = this;

        vm.source = entity;
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
            if (vm.source.id !== null) {
                Source.update(vm.source, onSaveSuccess, onSaveError);
            } else {
                Source.save(vm.source, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hhcFrontH2App:sourceUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
