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
        'ui.bootstrap',
        'ngSanitize',
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
            'directives/Hero',
            'directives/Footer',
            'controllers/IndexCtrl'
        ];

        var dependencies = {

            user: commonDirectives.concat([
            ]),            
            
            posts: [
	            'controllers/FeedCtrl',
	            'controllers/PostCtrl',
            	'directives/Posts'
            ],
        };

        var loadFn = function (dependencies) {
            return ['$q', '$rootScope', 'ssCommonService',
                function ($q, $rootScope, ssCommonService) {
	                ssCommonService.showProgress();	                
	                	                	                
                    var dependenciesLoaded = false;

                    var deferred = $q.defer();
                    var checkResolve = function() {
                        if (!dependenciesLoaded) { return; }
						ssCommonService.hideProgress();	
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
		});
		
		$stateProvider.state('index.feed', {
		  templateUrl: '/partials/feed.html',
		  url: '^/feed',
		  abstract: true,
		});
		
		$stateProvider.state('index.feed.posts', {
		  templateUrl: '/partials/feed.posts.html',
		  url: '/posts',
		  resolve: {
                load: loadFn(dependencies.posts)
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

/*
        $routeProvider.when('/:country/:product/summary/:period/', {
            templateUrl: rm.buildStaticUrl('partials/summary.html'),
            resolve: {
                load: loadFn(dependencies.summary)
            }
        });

        $routeProvider.when('/:country/:product/details/:period/', {
            templateUrl: rm.buildStaticUrl('partials/details.html'),
            resolve: {
                load: loadFn(dependencies.details)
            }
        });

        $routeProvider.when('/index/', {
            templateUrl: rm.buildStaticUrl('partials/index.html'),
            resolve: {
                load: loadFn(dependencies.index)
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/index/'
        });        
*/
		$urlRouterProvider.otherwise('/feed/posts');

    });
	
})();