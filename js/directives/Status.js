define([], function () {
    var directiveName = 'ssStatusDir';
    var fn = function ($rootScope, ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: { post: '=' },
            templateUrl: 'js/directives/Status.html',
            link: function ($scope, element, attrs) {
	            $scope.expandComments = false;
	            
	            $scope.commentText = "Expand";
	            
	            $scope.toggleComments = function() {
		           $scope.expandComments = !$scope.expandComments;
		           
		           if($scope.expandComments) {
			          $scope.commentText = "Collapse"; 
		           } else {
			           $scope.commentText = "Expand"; 
		           }
		           
		           $scope.$emit('isoRelayout');
	            }
	            
	            $scope.fromNow = function(date) {
					return ssCommonService.formatTime(date);
    			} 
    			
    			$scope.openPhotoModal = function(post) {
	    			$rootScope.$broadcast('PhotoModal', post);
    			}
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});