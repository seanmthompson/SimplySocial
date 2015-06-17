define([], function () {
    var directiveName = 'ssNavDir';
    var fn = function ($http, $window, $timeout) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Nav.html',
            link: function ($scope, element, attrs) {
				console.log('Nav directive loaded');
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});