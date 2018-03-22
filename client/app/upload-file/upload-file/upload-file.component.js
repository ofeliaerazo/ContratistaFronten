'use strict';

(function() {

    class MainController {

        constructor($q, $state, Upload, API, authService, navegateParams, usuariosService) {
            this.$q = $q;
            this.$state = $state;
            this.Upload = Upload;
            this.API = API;
            this.authService = authService;
            this.navegateParams = navegateParams;
            this.contratosService = contratosService;
        }

        $onInit() {
          if(this.navegateParams.getData("reload")){
            this.contratosService.get({id:this.authService.getIdContratos()}).$promise
            .then(response =>{
              this.navegateParams.setData("profilePicture", response.archivoAdjunto);
            })
            this.navegateParams.setData("reload", false);
          }
        }

        create(from) {
            this.Upload.upload({
                url: this.API + '/api/upload/users',
                data: {
                  file: this.file,
                  idContratos: this.authService.getIdContratos()
                }
            }).then(function(resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                console.log('OK');
            }, function(resp) {
                console.log('Error status: ' + resp.status);
            }, (evt) => {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

            });
        }
    }
    angular.module('contratista2017App')
    .component('uploadFile', {
    templateUrl: 'app/upload-file/upload-file/upload-file.html',
    controller: MainController,
    controllerAs: 'vm'
        });
})();
