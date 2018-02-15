'use strict';
(function(){

class ContratosCreateComponent {
  constructor(contratosService, tipoContratoService, objetoContratoService, crpService, usuariosService, Upload, API ) {
    this.contratosService = contratosService;
    this.tipoContratoService = tipoContratoService;
    this.objetoContratoService =  objetoContratoService;
    this.crpService = crpService;
    this.usuariosService= usuariosService;
    this.Upload = Upload;
    this.API = API;
  }

  $onInit(){
    this.tipoContratoService.query().$promise
                .then(response => {
                    this.tiposContrato = response;
                })
                .catch(err => console.error(err));

            this.objetoContratoService.query().$promise
                .then(response => {
                    this.objetoContrato = response;
                    console.log(this.objetoContrato);
                })
                .catch(err => console.error(err));
                this.crpService.query().$promise
                    .then(response => {
                        this.crp= response;
                        console.log(this.crp);
                    })
                    .catch(err => console.error(err));

                    this.usuariosService.query().$promise
                        .then(response => {
                            this.contratista = response;
                            console.log(this.contratista);
                        })
                        .catch(err => console.error(err));

                        this.usuariosService.query().$promise
                            .then(response => {
                                this.supervisor = response;
                                console.log(this.superivisor);
                            })
                            .catch(err => console.error(err));


        }
  crearContrato(){
    this.contratoService.save(this.contratos).$promise
               .then(response => {
                   console.log("Elcontrato se registrado correctamente ", response);
                   this.$state.go('contratos-list');
               })
               .catch(err => {
                   console.log("Error al crear el contrato ", err);
               })


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
