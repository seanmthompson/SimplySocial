define([], function () {
    var controllerName = 'ssPostCtlr';
    var fn = function ($scope, $sanitize, ssCommonService, ssDataService) {
    	ssDataService.getAllPosts().then(function(posts) {
	    	$scope.posts = posts.data;
    	});          		
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});