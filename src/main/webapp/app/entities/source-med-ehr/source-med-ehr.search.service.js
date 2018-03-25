(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('SourceMedSearch', SourceMedSearch);

    SourceMedSearch.$inject = ['$resource'];

    function SourceMedSearch($resource) {
        var resourceUrl =  'api/_search/source-meds/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
