(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceMedEhrController', SourceMedEhrController);

    SourceMedEhrController.$inject = ['SourceMed', 'SourceMedSearch'];

    function SourceMedEhrController(SourceMed, SourceMedSearch) {

        var vm = this;

        vm.sourceMeds = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            SourceMed.query(function(result) {
                vm.sourceMeds = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            SourceMedSearch.query({query: vm.searchQuery}, function(result) {
                vm.sourceMeds = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
