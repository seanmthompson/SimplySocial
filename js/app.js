(function() {
	'use strict';
	
	//app wide common files
	var files = [
		'services/CommonService',
		'services/DataService'					
	];
	
	// startup angular when the app level files are loaded
    require(files, function () {
        $(document).ready(function () {
            angular.bootstrap($('#ss-app'), ['ssApp']);
        });
    });

    // create an angular app and inject dependencies
    var dependencies = [
        'ui.router',
        'ngSanitize',
        'ngLoader'
    ];

    var app = angular.module('ssApp', dependencies, function () { });
    
        // setup routes for the app
    app.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $httpProvider, $provide) {

        // save references to the providers
        app.lazy = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        var commonDirectives = [
            'directives/Nav',
            'directives/Footer', 
            'directives/AddComment',
            'controllers/IndexCtrl'           
        ];       

        var dependencies = {

            index: commonDirectives.concat([
            ]),
            
            user: commonDirectives.concat([
	            'controllers/UserCtrl'
            ]),
            
            profile: commonDirectives.concat([
	            'controllers/UserProfileCtrl',
	            'directives/Status',
	            'directives/PhotoModal'
            ]),
            
            followers: commonDirectives.concat([
	            'controllers/UserFollowersCtrl',
	            'directives/Follower',
            ]),
            
            following: commonDirectives.concat([
	            'controllers/UserFollowingCtrl',
	            'directives/Follower',
            ]),
            
            settings: commonDirectives.concat([
	            'controllers/SettingsCtrl'
            ]),
            
            feed: [
	            'controllers/FeedCtrl'
            ],
            
            posts: [
	            'controllers/PostCtrl',
	            'directives/Posts',
            	'directives/Status',
            	'directives/Photo',
            	'directives/PhotoModal'
            ],

			photos: [
	            'controllers/PhotosCtrl',
	            'directives/Photos',
	            'directives/Photo',
	            'directives/PhotoModal'
            ]
            
        };

        var loadFn = function (dependencies) {
            return ['$q', '$rootScope', 'ssCommonService',
                function ($q, $rootScope, ssCommonService) {
	                console.log('in load fn ' + dependencies);
	                
	                //ssCommonService.showProgress();	                
	                	                	                
                    var dependenciesLoaded = false;

                    var deferred = $q.defer();
                    var checkResolve = function() {
                        if (!dependenciesLoaded) { return; }
					//	ssCommonService.hideProgress();	
                        deferred.resolve();
                    };

					

                    require(dependencies, function () {
                        dependenciesLoaded = true;                        
                        checkResolve();
                    });

                    return deferred.promise;
                }];
        };


		$stateProvider.state('index', {
		  templateUrl: '/partials/index.html',
		  url: '/',
		  abstract: true,
		  resolve: {
            load: loadFn(dependencies.index)
       	  }
		});
		
		$stateProvider.state('index.feed', {
		  templateUrl: '/partials/feed.html',
		  url: '^/feed',
		  abstract: true,
		  resolve: {
            load: loadFn(dependencies.feed)
       	  }
		});
		
		$stateProvider.state('index.feed.posts', {
		  templateUrl: '/partials/feed.posts.html',
		  url: '/posts',
		  resolve: {
          	load: loadFn(dependencies.posts)
       	  }
		});
		
		$stateProvider.state('index.feed.photos', {
		  templateUrl: '/partials/feed.photos.html',
		  url: '/photos',
		  resolve: {
          	load: loadFn(dependencies.photos)
       	  }
		});
		


		$stateProvider.state('index.user', {
		  templateUrl: '/partials/user.html',
		  url: '^/user',
		  abstract: true,
		  resolve: {
                load: loadFn(dependencies.user)
       	  }
		});

		
		$stateProvider.state('index.user.profile', {
		  templateUrl: '/partials/user.profile.html',
		  url: '/profile',
		  resolve: {
			  load: loadFn(dependencies.profile)
		  }
		});
		
		$stateProvider.state('index.user.followers', {
		  templateUrl: '/partials/user.followers.html',
		  url: '/followers',
		  resolve: {
                load: loadFn(dependencies.followers)
       	  }
		});
		
		$stateProvider.state('index.user.following', {
		  templateUrl: '/partials/user.following.html',
		  url: '/following',
		  resolve: {
                load: loadFn(dependencies.following)
       	  }
		});
		
		$stateProvider.state('index.settings', {
		  templateUrl: '/partials/settings.html',
		  url: '^/settings',
		  resolve: {
                load: loadFn(dependencies.settings)
       	  }
		});

		$urlRouterProvider.otherwise('/feed/posts');

    });
	
})();