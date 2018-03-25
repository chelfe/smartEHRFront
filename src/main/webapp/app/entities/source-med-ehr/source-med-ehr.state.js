(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('source-med-ehr', {
            parent: 'entity',
            url: '/source-med-ehr',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'SourceMeds'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/source-med-ehr/source-medsehr.html',
                    controller: 'SourceMedEhrController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('source-med-ehr-detail', {
            parent: 'source-med-ehr',
            url: '/source-med-ehr/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'SourceMed'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/source-med-ehr/source-med-ehr-detail.html',
                    controller: 'SourceMedEhrDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'SourceMed', function($stateParams, SourceMed) {
                    return SourceMed.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'source-med-ehr',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('source-med-ehr-detail.edit', {
            parent: 'source-med-ehr-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-med-ehr/source-med-ehr-dialog.html',
                    controller: 'SourceMedEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['SourceMed', function(SourceMed) {
                            return SourceMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('source-med-ehr.new', {
            parent: 'source-med-ehr',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-med-ehr/source-med-ehr-dialog.html',
                    controller: 'SourceMedEhrDialogController',
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
                    $state.go('source-med-ehr', null, { reload: 'source-med-ehr' });
                }, function() {
                    $state.go('source-med-ehr');
                });
            }]
        })
        .state('source-med-ehr.edit', {
            parent: 'source-med-ehr',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-med-ehr/source-med-ehr-dialog.html',
                    controller: 'SourceMedEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['SourceMed', function(SourceMed) {
                            return SourceMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('source-med-ehr', null, { reload: 'source-med-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('source-med-ehr.delete', {
            parent: 'source-med-ehr',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/source-med-ehr/source-med-ehr-delete-dialog.html',
                    controller: 'SourceMedEhrDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['SourceMed', function(SourceMed) {
                            return SourceMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('source-med-ehr', null, { reload: 'source-med-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
