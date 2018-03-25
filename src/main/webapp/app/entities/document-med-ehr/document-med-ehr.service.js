(function() {
    'use strict';
    angular
        .module('hhcFrontH2App')
        .factory('DocumentMed', DocumentMed);

    DocumentMed.$inject = ['$resource'];

    function DocumentMed ($resource) {
        var resourceUrl =  'api/document-meds/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
