define([], function () {
    var controllerName = 'ssUserCtlr';
    var fn = function ($rootScope, $scope, ssCommonService, ssDataService) {
		ssDataService.getUserProfile().then(function(profile) {
			$scope.user = profile.data;	
		});  	    	
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 