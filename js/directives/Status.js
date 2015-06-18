define([], function () {
    var directiveName = 'ssStatusDir';
    var fn = function (ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: { post: '=' },
            templateUrl: 'js/directives/Status.html',
            link: function ($scope, element, attrs) {
	            $scope.expandComments = false;
	            
	            $scope.toggleComments = function() {
		           $scope.expandComments = !$scope.expandComments; 
	            }
	            
	            $scope.fromNow = function(date) {
					return ssCommonService.formatTime(date);
    			} 
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});