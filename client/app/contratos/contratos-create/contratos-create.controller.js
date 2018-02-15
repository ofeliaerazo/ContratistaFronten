'use strict';
(function(){

class ContratosCreateComponent {
  constructor(contratosService, Upload, API) {
    this.contratosService = contratosService;
    this.Upload = Upload;
    this.API = API;
  }
  crearContrato(){

    
    this.Upload.upload({
        url: this.API + '/contratos/crearContrato',
        data:{
          file: this.file,
          estadoContrato: "1",
          numeroContrato: 2,
          valorContrato: 1235
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
  .component('contratosCreate', {
    templateUrl: 'app/contratos/contratos-create/contratos-create.html',
    controller: ContratosCreateComponent,
    controllerAs: 'vm'
  });

})();
