define([], function () {
    var directiveName = 'ssFooterDir';
    var fn = function () {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Footer.html',
            link: function ($scope, element, attrs) {
				console.log('FOoter directive loaded');
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});