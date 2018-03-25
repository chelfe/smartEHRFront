(function() {
    'use strict';

    angular
        .module('hhcFrontH2App')
        .controller('CyController', CyController);

    CyController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function CyController ($scope, Principal, LoginService, $state) {
    	
    	var cc=this;
        cc.showModal = showModal;
        cc.test = 'coucou';
        
        $scope.showModal = function() {
        	console.log('show modal called');
        }
        
        function showModal(){
        	console.log('show modal');
        	$('#myModal').fadeIn();
        }

        
        var container = document.getElementById('visualization');

        // Create a DataSet (allows two way data-binding)
        var groups = new vis.DataSet([
        	{id: 1, content:'group 1', value: 1, height:100},
        	{id: 2, content:'group 2', value: 2},
        	{id: 3, content:'group 3'},
        ]);
        
//        var items = new vis.DataSet([
//          {id: 1, group:1, content: 'item 1', start: '2013-04-20'},
//          {id: 2, group:2, content: 'item 2', start: '2013-04-14'},
//          {id: 3, group:3, content: 'item 3', start: '2013-04-18'},
//          {id: 4, group:1, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
//          {id: 5, group:2, content: 'item 5', start: '2013-04-25'},
//          {id: 6, group:1, content: 'item 6', start: '2013-04-27'}
//        ]);
        
        var items = new vis.DataSet();
        
        items.add({
            id: 1,
            group: 2,
            content: '<img src="../../content/images/BilanEndocrinologique.png"> ',
            start: '2013-04-20',
            type: 'box'
          });
        
        items.add({
            id: 3,
            group: 1,
            content: '  <img src="../../content/images/BilanHba1c.png">' ,
            start: '2016-04-20',
            end: '2016-04-25',
            type: 'box'
          });
        
        items.add({
            id: 4,
            group: 3,
            content: 'item 3' ,
            start: '2013-05-20',
            type: 'box'
          });
        
        items.add({
            id: 2,
            group: 2,
            content: 'item 4' ,
            start: new Date (2015,3,20),
            end: new Date (2018,7,20),
            type: 'point'
          });

        // Configuration for the Timeline
//        var options = {};
        var options = {
        		groupOrder: function (a, b) {
        		      return a.value - b.value;
        		    },
        	  };

        // Create a Timeline
//        var timeline = new vis.Timeline(container, groups, items, options);
        var timeline = new vis.Timeline(container);
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);

//        timeline.on('select', function (properties) {
////        	  alert('selected items: ' + JSON.stringify(properties));
//        	alert('selected items: ' + properties.items);
//        	$('#myModal').fadeIn();
//        	});

        timeline.on('select', function (properties) {
            logEvent('select', properties);
          });

          items.on('*', function (event, properties) {
            logEvent(event, properties);
          });

          function logEvent(event, properties) {
            var log = document.getElementById('log');
            var msg = document.createElement('div');
//            $('#myModal').fadeIn();
           console.log( 'event=' + JSON.stringify(event) + ', ' +
                'properties=' + JSON.stringify(properties))
          }
        
        
        
    }
    
   
    
    

    

})();
