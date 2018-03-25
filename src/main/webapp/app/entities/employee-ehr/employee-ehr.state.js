(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('employee-ehr', {
            parent: 'entity',
            url: '/employee-ehr',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Employees'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/employee-ehr/employeesehr.html',
                    controller: 'EmployeeEhrController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('employee-ehr-detail', {
            parent: 'employee-ehr',
            url: '/employee-ehr/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Employee'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/employee-ehr/employee-ehr-detail.html',
                    controller: 'EmployeeEhrDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Employee', function($stateParams, Employee) {
                    return Employee.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'employee-ehr',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('employee-ehr-detail.edit', {
            parent: 'employee-ehr-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/employee-ehr/employee-ehr-dialog.html',
                    controller: 'EmployeeEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Employee', function(Employee) {
                            return Employee.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('employee-ehr.new', {
            parent: 'employee-ehr',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/employee-ehr/employee-ehr-dialog.html',
                    controller: 'EmployeeEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                firstName: null,
                                lastName: null,
                                email: null,
                                phoneNumber: null,
                                hireDate: null,
                                salary: null,
                                commissionPct: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('employee-ehr', null, { reload: 'employee-ehr' });
                }, function() {
                    $state.go('employee-ehr');
                });
            }]
        })
        .state('employee-ehr.edit', {
            parent: 'employee-ehr',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/employee-ehr/employee-ehr-dialog.html',
                    controller: 'EmployeeEhrDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Employee', function(Employee) {
                            return Employee.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('employee-ehr', null, { reload: 'employee-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('employee-ehr.delete', {
            parent: 'employee-ehr',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/employee-ehr/employee-ehr-delete-dialog.html',
                    controller: 'EmployeeEhrDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Employee', function(Employee) {
                            return Employee.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('employee-ehr', null, { reload: 'employee-ehr' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
