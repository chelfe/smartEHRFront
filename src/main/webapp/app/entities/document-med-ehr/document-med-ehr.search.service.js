(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('DocumentMedSearch', DocumentMedSearch);

    DocumentMedSearch.$inject = ['$resource'];

    function DocumentMedSearch($resource) {
        var resourceUrl =  'api/_search/document-meds/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
