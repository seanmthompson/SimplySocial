define([], function () {
    var controllerName = 'ssFeedCtlr';
    var fn = function ($rootScope, $scope, $window, $compile, $location, $timeout) {
	    	
	    console.log('feed controller loaded');    
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
}); 