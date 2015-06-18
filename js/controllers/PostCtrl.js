define([], function (moment) {
    var controllerName = 'ssPostCtlr';
    var fn = function ($scope, $sanitize, ssCommonService, ssDataService) {	    	    
	    
    	ssDataService.getAllPosts().then(function(posts) {
	    	$scope.posts = posts.data;
    	});
    	
    	$scope.fromNow = function(date) {
	    	return ssCommonService.formatTime(date);
    	}         		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});