define([], function () {
    var controllerName = 'ssUserFollowingCtlr';
    var fn = function ($rootScope, $scope, $timeout, ssCommonService, ssDataService) {
	    	    
	   	ssCommonService.showProgress();
	    	    
	    $timeout(function() {
		    ssDataService.getUserFollowing().then(function(followers) {
				$scope.followers = followers.data;
				ssCommonService.hideProgress();
			});	        
	    }, ssCommonService.getRandomNumberInRange(200, 3000));	    
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 