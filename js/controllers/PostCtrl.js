define(['libs/moment/moment'], function (moment) {
    var controllerName = 'ssPostCtlr';
    var fn = function ($scope, $sanitize, ssCommonService, ssDataService) {
	    
	    moment.locale('en', {
		    relativeTime : {
		        future: "in %s",
		        past:   "%s",
		        s:  "s",
		        m:  "a minute",
		        mm: "%dm",
		        h:  "1h",
		        hh: "%dh",
		        d:  "1d",
		        dd: "%dd",
		        M:  "1m",
		        MM: "%dm",
		        y:  "1y",
		        yy: "%dy"
		    }
		});
	    
	    
    	ssDataService.getAllPosts().then(function(posts) {
	    	$scope.posts = posts.data;
    	});
    	
    	$scope.fromNow = function(date) {
	    	return moment(date).fromNow();
    	}         		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});