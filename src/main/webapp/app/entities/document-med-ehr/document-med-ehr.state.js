(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('document-med-ehr', {
            parent: 'entity',
            url: '/document-med-ehr',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'DocumentMeds'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/document-med-ehr/document-medsehr.html',
                    controller: 'DocumentMedEhrController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('document-med-ehr-detail', {
            parent: 'document-med-ehr',
            url: '/document-med-ehr/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'DocumentMed'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/document-med-ehr/document-med-ehr-detail.html',
                    controller: 'DocumentMedEhrDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'DocumentMed', function($stateParams, DocumentMed) {
                    return DocumentMed.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'document-med-ehr',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('document-med-ehr-detail.edit', {
            parent: 'document-med-ehr-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/document-med-ehr/document-med-ehr-dialog.html',
                    controller: 'DocumentMedEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['DocumentMed', function(DocumentMed) {
                            return DocumentMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('document-med-ehr.new', {
            parent: 'document-med-ehr',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/document-med-ehr/document-med-ehr-dialog.html',
                    controller: 'DocumentMedEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                index: null,
                                type: null,
                                score: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('document-med-ehr', null, { reload: 'document-med-ehr' });
                }, function() {
                    $state.go('document-med-ehr');
                });
            }]
        })
        .state('document-med-ehr.edit', {
            parent: 'document-med-ehr',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/document-med-ehr/document-med-ehr-dialog.html',
                    controller: 'DocumentMedEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['DocumentMed', function(DocumentMed) {
                            return DocumentMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('document-med-ehr', null, { reload: 'document-med-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('document-med-ehr.delete', {
            parent: 'document-med-ehr',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/document-med-ehr/document-med-ehr-delete-dialog.html',
                    controller: 'DocumentMedEhrDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['DocumentMed', function(DocumentMed) {
                            return DocumentMed.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('document-med-ehr', null, { reload: 'document-med-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
