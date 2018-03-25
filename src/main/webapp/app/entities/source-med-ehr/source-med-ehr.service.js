(function() {
    'use strict';
    angular
        .module('hhcFrontH2App')
        .factory('SourceMed', SourceMed);

    SourceMed.$inject = ['$resource'];

    function SourceMed ($resource) {
        var resourceUrl =  'api/source-meds/:id';

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
