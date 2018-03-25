(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceEhrDeleteController',SourceEhrDeleteController);

    SourceEhrDeleteController.$inject = ['$uibModalInstance', 'entity', 'Source'];

    function SourceEhrDeleteController($uibModalInstance, entity, Source) {
        var vm = this;

        vm.source = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Source.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
