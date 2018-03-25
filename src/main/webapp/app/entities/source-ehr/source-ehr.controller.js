(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SourceEhrController', SourceEhrController);

    SourceEhrController.$inject = ['Source', 'SourceSearch'];

    function SourceEhrController(Source, SourceSearch) {

        var vm = this;

        vm.sources = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Source.query(function(result) {
                vm.sources = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            SourceSearch.query({query: vm.searchQuery}, function(result) {
                vm.sources = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
