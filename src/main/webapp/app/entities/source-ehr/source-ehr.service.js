(function() {
    'use strict';
    angular
        .module('hhcFrontH2App')
        .factory('Source', Source);

    Source.$inject = ['$resource'];

    function Source ($resource) {
        var resourceUrl =  'api/sources/:id';

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
