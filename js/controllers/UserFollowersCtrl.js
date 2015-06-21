define([], function () {
    var controllerName = 'ssUserFollowersCtlr';
    var fn = function ($rootScope, $scope, $timeout, ssCommonService, ssDataService) {
	    	    
	   	ssCommonService.showProgress();	    	    		
		
		$timeout(function() {
		    ssDataService.getUserFollowers().then(function(followers) {
				$scope.followers = followers.data;
				ssCommonService.hideProgress();
			});	        
	    }, ssCommonService.getRandomNumberInRange(200, 3000));
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 