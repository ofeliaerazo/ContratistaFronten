'use strict';
(function(){

class TiendaComponent{


    contructor(){
      console-log("hola tienda");
    }
    $onInit(){

      this.productos = [
      {
        id:1,
        nombre:'pantalla lcd',
        marca:'zony',
        imagen:'../assets/images/tv.jpg',
        valor: 30000000,
        descuento: 5
      },
      {
        id:1,
        nombre:'tv zony',
        marca:'zony',
        imagen:'../assets/images/tv.jpg',
        valor: 25000000,
        descuento: 5
      },
      {
        id:1,
        nombre:'tv lg',
        marca:'ogl',
        imagen:'../assets/images/tv.jpg',
        valor: 20000000,
        descuento: 5
      }

      ];
      this.carrito =[];
    }
    agregarProducto(item){
      this.carrito.push(item);
      for(var i =0; i < this.carrito.length; i++){
        this.suma = this.carrito[i].valor;
      }

      this.totalPago = this.suma;
    }

  }

  angular.module('contratista2017App')
    .component('tienda', {
      templateUrl: 'app/tienda/tienda.html',
      controller: TiendaComponent,
      controllerAs:'vm'
    });

  })();
