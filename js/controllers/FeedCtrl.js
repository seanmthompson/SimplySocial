define([], function () {
    var controllerName = 'ssFeedCtlr';
    var fn = function ($rootScope, $scope, $state) {
		
		$scope.setViewMode = function(mode) {
			$scope.$broadcast(mode);	
		};
			    
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 