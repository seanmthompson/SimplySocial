define([], function () {
    var controllerName = 'ssUserProfileCtlr';
    var fn = function ($rootScope, $scope, $timeout, ssCommonService, ssDataService) {
	    
	    ssCommonService.showProgress();	    	    		
		
		$timeout(function() {
		    ssDataService.getUserFeed().then(function(posts) {
				$scope.posts = posts.data;
				ssCommonService.hideProgress();
			});      
	    }, ssCommonService.getRandomNumberInRange(200, 3000));
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 