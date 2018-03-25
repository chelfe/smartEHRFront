(function() {
    'use strict';

    var app = angular
        .module('hhcFrontH2App', [
            'ngStorage',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'ngSanitize'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
    
    app.filter('highlight', function() {
        return function(text, selectedWord) {
          if(selectedWord) {
            var pattern = new RegExp(selectedWord, "g");
            return text.replace(pattern, '<mark><b>' + selectedWord + '</b></mark>');
          }
          else {
            return text;
          }
        };
    });
})();
