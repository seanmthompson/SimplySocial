define([], function () {
    var controllerName = 'ssPhotosCtlr';
    var fn = function ($scope, $timeout, $sanitize, ssCommonService, ssDataService) {     	    	    
		ssDataService.getPhotoFeed().then(function(posts) {
			ssCommonService.showProgress();
			
	    	// just mocking a slow repsonse from server   	
		    $timeout(function() {
			    ssCommonService.hideProgress();
				$scope.$broadcast('PhotosLoaded', posts.data);		        
		    }, ssCommonService.getRandomNumberInRange(200, 3000));
		});  	    		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});