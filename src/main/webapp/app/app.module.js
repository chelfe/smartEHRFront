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
        return function(text, selectedWords) {
          if(selectedWords) {
        	$(selectedWords).each(function(selectedWord) {
        		var pattern = new RegExp(selectedWords[selectedWord], "g");
        		text = text.replace(pattern, '<mark><b>' + selectedWords[selectedWord] + '</b></mark>');
        	});
          }
          return text;
        };
    });
})();
