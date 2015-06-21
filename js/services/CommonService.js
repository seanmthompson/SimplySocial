define(['libs/moment/moment'], function (moment) {
    var fn = function ($rootScope) {

		moment.locale('en', {
		    relativeTime : {
		        future: "in %s",
		        past:   "%s",
		        s:  "s",
		        m:  "1m",
		        mm: "%dm",
		        h:  "1h",
		        hh: "%dh",
		        d:  "1d",
		        dd: "%dd",
		        M:  "1m",
		        MM: "%dm",
		        y:  "1y",
		        yy: "%dy"
		    }
		});

        this.setPage = function (page) {
            document.title =  'SimplySocial - ' + page;
            var body = $('body');
            body.removeClass();
            var cls = page.toLowerCase().replace(' ', '-');
            body.addClass(cls)
        };

        var addLoadingClass = function () {
            $('body').addClass('rm-loading');
            $rootScope.loading = true;
        };

        var removeLoadingClass = function () {
            $('body').removeClass('rm-loading');
            $rootScope.loading = false;
        };

        this.showProgress = function (container) {	        
            addLoadingClass();
        };

        this.hideProgress = function () {	       
            removeLoadingClass();
        };
        
        this.formatTime = function(date) {
	       return moment(date).fromNow(); 
        };
        
        this.getRandomNumberInRange = function(min, max) {
	    	return Math.floor(Math.random() * (max - min + 1)) + min;   
        };


    };// end fn

    angular.module('ssApp').service('ssCommonService', fn);
    return fn;
});
