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

/*
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
*/

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
            ]),
            
            feed: [
	            'controllers/FeedCtrl'
            ],
            
            posts: [
	            'controllers/PostCtrl',
            	'directives/Posts',
            	'directives/Status'
            ],

			photos: [
	            'controllers/PhotosCtrl',
	            'directives/Photos'
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
		

/*
		$stateProvider.state('index.user', {
		  templateUrl: '/partials/user.html',
		  url: '/user',
		  abstract: true,
		  resolve: {
                load: loadFn(dependencies.user)
       	  }
		});

		
		$stateProvider.state('index.user.all', {
		  templateUrl: '/partials/user.all.html',
		  url: '/all',
		  resolve: {
			  load: loadFn(dependencies.userAll)
		  }
		});
		
		$stateProvider.state('index.feed', {
		  templateUrl: '/partials/feed.html',
		  url: '/feed',
		  abstract: true,
		  resolve: {
                load: loadFn(dependencies.feed)
       	  }
		});
*/

		//abstract: index

		//abstract: index.user controller
		
		// user.profile
		// user.followers
		// user.following
		// user.settings
		
		
		//abstract: index.feed 

		// feed.posts
		// feed.photos
		$urlRouterProvider.otherwise('/feed/posts');

    });
	
})();