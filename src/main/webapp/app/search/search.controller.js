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
        
        function getDocumentBody(searchItem, documentMedList) {
        	console.log('SearchController.getDocumentBody');
        	
        	vm.searchItem = searchItem;
        	console.log("get : " + "/content/txt/" + searchItem);
        	$.get( "/content/txt/" + searchItem, function( data ) {
        		//vm.documentBody = data;
        		
        		$('#searchModal .modal-body').html(
        				processDataDocumentBody(data, getTermsFromDocumentMedList(documentMedList))
        				).promise().done(function(){
        			$('#searchModal').fadeIn();
        		});
    		});
        }
        
        function getTermsFromDocumentMedList(documentMedList) {
        	var termList = [];
        	$(documentMedList).each(function(documentMed) {
        		var docTermList = documentMedList[documentMed].candidateTermList;
        		$(docTermList).each(function(term) {
        			termList.push(docTermList[term]);
        		});
        	});
        	
        	return termList;
        }
        
        function processDataDocumentBody(data, selectedWords) {
        	var result = data.replace(/[\r\n]/g, "<br>").replace(/(?:<br>\s*){2,}/g, '<br>');
        	
        	$(selectedWords).each(function(selectedWord) {
        		var pattern = new RegExp(selectedWords[selectedWord], "g");
        		result = result.replace(pattern, '<mark><b>' + selectedWords[selectedWord] + '</b></mark>');
        	});
        	
        	return result;
        }
    }

})();
