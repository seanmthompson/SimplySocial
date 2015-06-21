define([], function (moment) {
    var directiveName = 'ssPhotosDir';
    var fn = function ($timeout, ssDataService, ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Photos.html',
            link: function ($scope, element, attrs) {
	            var gridEl = element[0];
	            	            
	            $scope.$on('PhotosLoaded', function(evt, posts) {
		            $scope.posts = posts;
		            initIsotope();
	            })
	            
	            	            	            	            	           			    	
		    	$scope.fromNow = function(date) {
			    	return ssCommonService.formatTime(date);
		    	}	            	            
	            	               
	            var iso;   
				var initIsotope = function () {                    
                    require(['libs/isotope/dist/isotope.pkgd.min'], function( Isotope ) {
						var iso = new Isotope( gridEl, 
						{
							itemSelector: '.item'
						});
					});
                };
    			    			
	            
	            $scope.$on('$destroy', function (e, data) {
                    // unbind the event listeners
                    if(iso) {
	                 	iso.destroy();   
                    };                    
                });
	            
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});