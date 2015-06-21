define([], function (moment) {
    var directiveName = 'ssPostsDir';
    var fn = function ($timeout, ssDataService, ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Posts.html',
            link: function ($scope, element, attrs) {
	            var gridEl = element[0];
	            $scope.currentViewMode = 'list';
	            	            	            
	            $scope.$on('PostsLoaded', function(evt, posts) {
		            $scope.posts = posts;
	            })
	            
	            $scope.$on('grid', function() {
		            $scope.currentViewMode = 'grid';
		            initIsotope();
	            });
	            
	            $scope.$on('list', function() {
		            $scope.currentViewMode = 'list';
		            destroyIsotope(); 
	            });
	            
	            $scope.$on('isoRelayout', function() {
		        	if(iso) {
			        	iso.reloadItems(); 
		        	} else {
			        	initIsotope();	
		        	}		           		           
	            });
	            	            	            	            	           			    	
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
    			    			
    			var destroyIsotope = function() {
	    			if(iso) {
	                 	iso.destroy();   
                    }; 	
    			}; 			
	            
	            $scope.$on('$destroy', function (e, data) {
                    destroyIsotope();                   
                });
	            
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});