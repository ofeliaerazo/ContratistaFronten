'use strict';

function uploadFileController() {
    this.message = 'World';
}

angular.module('contratista2017App')
    .component('fotoUser', {
        template: '<h1>Hello {{ $ctrl.message }}</h1>',
        bindings: { message: '<' },
        controller: uploadFileController
    });
