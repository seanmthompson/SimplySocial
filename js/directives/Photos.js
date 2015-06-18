define([], function () {
    var directiveName = 'ssPhotosDir';
    var fn = function () {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Photos.html',
            link: function ($scope, element, attrs) {
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});