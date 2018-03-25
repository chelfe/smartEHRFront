(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('cy', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/cy/cy.html',
                    controller: 'CyController',
                    controllerAs: 'cc'
                }
            }
        });
    }
})();