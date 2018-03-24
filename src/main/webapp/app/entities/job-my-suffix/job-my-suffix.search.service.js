(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('JobSearch', JobSearch);

    JobSearch.$inject = ['$resource'];

    function JobSearch($resource) {
        var resourceUrl =  'api/_search/jobs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
