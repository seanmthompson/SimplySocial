define([], function () {
    var controllerName = 'ssUserProfileCtlr';
    var fn = function ($rootScope, $scope, ssCommonService, ssDataService) {
	    	    
		ssDataService.getUserFeed().then(function(posts) {
			$scope.posts = posts.data;
		});
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 