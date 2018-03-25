(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('DocumentMedEhrDeleteController',DocumentMedEhrDeleteController);

    DocumentMedEhrDeleteController.$inject = ['$uibModalInstance', 'entity', 'DocumentMed'];

    function DocumentMedEhrDeleteController($uibModalInstance, entity, DocumentMed) {
        var vm = this;

        vm.documentMed = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            DocumentMed.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
