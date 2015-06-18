define([], function () {
    var directiveName = 'ssAddCommentDir';
    var fn = function ($rootScope, ssCommonService) {
        return {
            restrict: 'C',
            replace: true,
            scope: {},
            templateUrl: 'js/directives/AddComment.html',
            link: function ($scope, element, attrs) {
                var modalEl = element.find('.modal').first();
				
                $rootScope.$on('AddComment', function (e) {
                    modalEl.modal('show');
                });

                $scope.$on('$destroy', function () {
                });
            }
        }
    };
    angular.module('ssApp').lazy.directive(directiveName, fn);
});
