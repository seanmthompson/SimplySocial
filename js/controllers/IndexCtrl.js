define([], function () {
    var controllerName = 'ssIndexCtlr';
    var fn = function () {
        
        console.log('index page loaded');
    };

    angular.module('ssApp').lazy.controller(controllerName, fn);
});