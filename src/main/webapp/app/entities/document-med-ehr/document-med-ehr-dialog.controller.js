(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('DocumentMedEhrDialogController', DocumentMedEhrDialogController);

    DocumentMedEhrDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'DocumentMed', 'SourceMed'];

    function DocumentMedEhrDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, DocumentMed, SourceMed) {
        var vm = this;

        vm.documentMed = entity;
        vm.clear = clear;
        vm.save = save;
        vm.sources = SourceMed.query({filter: 'documentmed-is-null'});
        $q.all([vm.documentMed.$promise, vm.sources.$promise]).then(function() {
            if (!vm.documentMed.sourceId) {
                return $q.reject();
            }
            return SourceMed.get({id : vm.documentMed.sourceId}).$promise;
        }).then(function(source) {
            vm.sources.push(source);
        });

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.documentMed.id !== null) {
                DocumentMed.update(vm.documentMed, onSaveSuccess, onSaveError);
            } else {
                DocumentMed.save(vm.documentMed, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('hhcFrontH2App:documentMedUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
