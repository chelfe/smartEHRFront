(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceMedEhrDeleteController',SourceMedEhrDeleteController);

    SourceMedEhrDeleteController.$inject = ['$uibModalInstance', 'entity', 'SourceMed'];

    function SourceMedEhrDeleteController($uibModalInstance, entity, SourceMed) {
        var vm = this;

        vm.sourceMed = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            SourceMed.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
