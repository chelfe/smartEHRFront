(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('SourceSearch', SourceSearch);

    SourceSearch.$inject = ['$resource'];

    function SourceSearch($resource) {
        var resourceUrl =  'api/_search/sources/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
