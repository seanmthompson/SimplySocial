define([], function () {
    var directiveName = 'ssPhotoModalDir';
    var fn = function ($rootScope, ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/PhotoModal.html',
            link: function ($scope, element, attrs) {
	            
                var modalEl = element.find('.modal').first();
				
                $rootScope.$on('PhotoModal', function (event, post) {
	            	$scope.post = post;
					modalEl.modal('show');
                });
                
                $scope.fromNow = function(date) {
					return ssCommonService.formatTime(date);
    			}; 

            }
        }
    };
    angular.module('ssApp').lazy.directive(directiveName, fn);
});
