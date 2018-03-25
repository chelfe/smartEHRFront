(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .factory('ElasticService', ElasticService);

    ElasticService.$inject = ['$resource', 'elasticsearch'];

    function ElasticService ($resource, es) {
    	return esFactory({
            host: 'localhost:9200',
            apiVersion: '2.3',
            log: 'trace'
          });
    }
})();
