define([], function () {
    var controllerName = 'ssPostCtlr';
    var fn = function (ssCommonService) {
                
        console.log('post control page loaded');
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});