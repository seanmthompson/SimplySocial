define([], function () {
    var controllerName = 'ssSettingsCtlr';
    var fn = function ($rootScope, $scope, $timeout, ssCommonService, ssDataService) {
	    	    
	   	ssCommonService.showProgress();
	    	    
	    $timeout(function() {
		    ssDataService.getUserSettings().then(function(settings) {
				$scope.settings = settings.data;
				ssCommonService.hideProgress();
			});	        
	    }, ssCommonService.getRandomNumberInRange(200, 3000));	    
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 