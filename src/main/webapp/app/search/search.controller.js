(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService'];

    function SearchController(SearchService) {

        var vm = this;
        vm.search = search;
        vm.getDocumentBody = getDocumentBody;
        vm.results = [];
        vm.searchItem = '';
        vm.documentBody = '';
        
        console.log('SearchController.initialisé');
        
        function search(searchQuery) {
        	console.log('SearchController.search : '  + searchQuery);
        	SearchService.query({query: vm.searchQuery}, function(results) {
                vm.results = results;
            });
        }
        
        function getDocumentBody(searchItem) {
        	console.log('SearchController.getDocumentBody');
        	
        	vm.searchItem = searchItem;
        	console.log("get : " + "/content/txt/" + searchItem);
        	$.get( "/content/txt/" + searchItem, function( data ) {
        		console.log("data : " + data);
        		vm.documentBody = data;
        		$('#searchModal').fadeIn();
    		});
        }
    }

})();
