'use strict';
(function(){

class ContratosUpdateComponent {
  constructor(contratosService, $state, navegateParams) {
    this.contratosService = contratosService;
    this.$state = $state;
    this.navegateParams = navegateParams;
  }
  $onInit() {
      this.contratosService.get({ id: this.navegateParams.getData('idContratos')}).$promise
        .then(response => {
          this.contratos = response;
          console.log(this.contrato);
        })
        .catch(err => console.error(err));

      }
      // inicio funcion para la imagen en tipo blob
imageLoad($fileContent) {
      this.image = $fileContent;
      $("#ModalFoto").modal();
  }
// fin funcion para la imagen en tipo blob

mostrarModal(){



}

  updateContrato() {
    console.log(this.contrato);
    console.log("Imagen");
  console.log(this.croppedImage);
  if (this.croppedImage) {
          var newImagen = this.croppedImage.split(',');
          this.contratos.imagenType = newImagen[0];
          this.contratos.photo = newImagen[1];

      }
    this.contratosService.update({id:this.contratos.id},this.contratos).$promise
      .then(response => {
        console.log("Contrato Actualizado Correctamente...!!!");
        this.$state.go('contratos-list');
      })
      .catch(err => {
        console.error(err)
      });

  }
}

angular.module('contratista2017App')
  .component('contratosUpdate', {
    templateUrl: 'app/contratos/contratos-update/contratos-update.html',
    controller: ContratosUpdateComponent,
    controllerAs:'vm'
  });

})();
