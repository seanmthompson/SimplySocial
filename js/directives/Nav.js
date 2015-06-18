define([], function () {
    var directiveName = 'ssNavDir';
    var fn = function ($rootScope) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/Nav.html',
            link: function ($scope, element, attrs) {
				$scope.AddComment = function() {
					$rootScope.$broadcast('AddComment');
				};
            }
        }
    };

    angular.module('ssApp').lazy.directive(directiveName, fn);
});