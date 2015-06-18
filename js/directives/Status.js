define([], function () {
    var directiveName = 'ssStatusDir';
    var fn = function () {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Status.html',
            link: function ($scope, element, attrs) {
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});