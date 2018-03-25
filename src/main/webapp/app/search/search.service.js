(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('SearchService', SearchService);

    SearchService.$inject = ['$resource'];

    function SearchService($resource) {
        var resourceUrl =  'api/_search/document-meds/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
