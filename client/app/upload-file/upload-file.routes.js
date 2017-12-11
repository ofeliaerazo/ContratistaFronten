(function() {
    'use strict';

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('uploadFile', {
                url: '/upload/file',
                template: '<upload-file></upload-file>',
            })
            .state('uploadFileUser', {
                url: '/upload/file/user',
                template: '<foto-user></foto-user>',
            });
    }

    angular
        .module('contratista2017App')
        .config(config);
})();
