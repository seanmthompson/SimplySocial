define([], function (moment) {
    var controllerName = 'ssPhotosCtlr';
    var fn = function ($scope, $timeout, $sanitize, ssCommonService, ssDataService) {     
	    
	    ssCommonService.showProgress();
	    
	    ssDataService.getPhotoFeed().then(function(posts) {
	    	// just mocking a slow repsonse from server   	
		    $timeout(function() {
		        $scope.posts = posts.data;
		         ssCommonService.hideProgress();
		    }, ssCommonService.getRandomNumberInRange(200, 3000));
    	});
    	
    	$scope.fromNow = function(date) {
	    	return ssCommonService.formatTime(date);
    	}
	      		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});