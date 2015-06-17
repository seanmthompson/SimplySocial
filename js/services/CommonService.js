define([], function () {
    var fn = function ($rootScope) {

        this.setPage = function (page) {
            document.title =  'SimplySocial - ' + page;
            var body = $('body');
            body.removeClass();
            var cls = page.toLowerCase().replace(' ', '-');
            body.addClass(cls)
        };

        var addLoadingClass = function () {
            $('body').addClass('rm-loading');
        };

        var removeLoadingClass = function () {
            $('body').removeClass('rm-loading');
        };

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            addLoadingClass();
        });

        $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            removeLoadingClass();
        });

        this.showProgress = function (container) {
            addLoadingClass(container, showSpinner);
        };

        this.hideProgress = function () {
            removeLoadingClass();
        };


    };// end fn

    angular.module('ssApp').service('ssCommonService', fn);
    return fn;
});
