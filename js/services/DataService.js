define([], function () {
    var fn = function ($rootScope, $http, $q, ssCommonService) {
        var self = this;
        
        var baseUrl = '/api/';
        
        this.getAllPosts = function() {
	        return $http.get(baseUrl + 'allPosts');
        };
        
        this.getPhotoFeed = function() {
	        return $http.get(baseUrl + 'photoFeed');
        };
        
         this.getUserProfile = function() {
	        return $http.get(baseUrl + 'userProfile');
        };
        
        this.getUserFeed = function() {
	        return $http.get(baseUrl + 'userFeed');
        };
        
         this.getUserFollowers = function() {
	        return $http.get(baseUrl + 'userFollowers');
        };
        
         this.getUserFollowing = function() {
	        return $http.get(baseUrl + 'userFollowing');
        };
        
         this.getUserSettings = function() {
	        return $http.get(baseUrl + 'userSettings');
        };	
        
    }; // end fn
    
    angular.module('ssApp').service('ssDataService', fn);
    return fn;
});