define([], function () {
    var directiveName = 'ssFollowerDir';
    var fn = function ($rootScope) {
        return {
            restrict: 'C',
            replace: true,
            scope: { follower: '=' },
            templateUrl: 'js/directives/Follower.html',
            link: function ($scope, element, attrs) {
				
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});