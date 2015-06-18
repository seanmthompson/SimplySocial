define([], function (moment) {
    var controllerName = 'ssPostCtlr';
    var fn = function ($rootScope, $scope, $timeout, $sanitize, ssCommonService, ssDataService) {	    	    	    	    
    	
    	ssCommonService.showProgress();
    	
    	ssDataService.getAllPosts().then(function(posts) { 	 
	    	// just mocking a slow repsonse from server   	
		    $timeout(function() {
		        $scope.posts = posts.data;
		         ssCommonService.hideProgress();
		    }, ssCommonService.getRandomNumberInRange(200, 3000));
    	});    	    	        		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});