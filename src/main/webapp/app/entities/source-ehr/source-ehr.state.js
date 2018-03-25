(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('source-ehr', {
            parent: 'entity',
            url: '/source-ehr',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Sources'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/source-ehr/sourcesehr.html',
                    controller: 'SourceEhrController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('source-ehr-detail', {
            parent: 'source-ehr',
            url: '/source-ehr/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Source'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/source-ehr/source-ehr-detail.html',
                    controller: 'SourceEhrDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Source', function($stateParams, Source) {
                    return Source.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'source-ehr',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('source-ehr-detail.edit', {
            parent: 'source-ehr-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-ehr/source-ehr-dialog.html',
                    controller: 'SourceEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Source', function(Source) {
                            return Source.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('source-ehr.new', {
            parent: 'source-ehr',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-ehr/source-ehr-dialog.html',
                    controller: 'SourceEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                numphrase: null,
                                sentence: null,
                                document: null,
                                docdate: null,
                                startposition: null,
                                endposition: null,
                                candidatetermstring: null,
                                candidateterm: null,
                                normalizedterm: null,
                                lemmaterm: null,
                                docType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('source-ehr', null, { reload: 'source-ehr' });
                }, function() {
                    $state.go('source-ehr');
                });
            }]
        })
        .state('source-ehr.edit', {
            parent: 'source-ehr',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-ehr/source-ehr-dialog.html',
                    controller: 'SourceEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Source', function(Source) {
                            return Source.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('source-ehr', null, { reload: 'source-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('source-ehr.delete', {
            parent: 'source-ehr',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-ehr/source-ehr-delete-dialog.html',
                    controller: 'SourceEhrDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Source', function(Source) {
                            return Source.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('source-ehr', null, { reload: 'source-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
