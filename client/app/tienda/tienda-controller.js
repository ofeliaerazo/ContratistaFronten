'use strict';
(function(){

class TiendaComponent{
    constructor(){
      console.log("hola tienda");
      this.carrito =[];
    }

    $onInit(){

      this.productos = [
      {
        id:1,
        nombre:'pantalla lcd',
        marca:'zony',
        imagen:'../assets/images/tv.jpg',
        valor: 30000000,
        descuento: 5,
        stock:4
      },
      {
        id:2,
        nombre:'tv zony',
        marca:'zony',
        imagen:'../assets/images/tv.jpg',
        valor: 25000000,
        descuento: 5,
        stock:4
      },
      {
        id:3,
        nombre:'tv lg',
        marca:'ogl',
        imagen:'../assets/images/tv.jpg',
        valor: 20000000,
        descuento: 5,
        stock:4
      }

      ];
      
    }

    agregarProducto(item){
      console.log(this.carrito,item);
      this.carrito.push(item);
      /*for(i=0; i<this.producto.length; i++){
        if(this.producto[i].id == this.comprar.idProducto.id ){
          this.itemProducto =this.producto[i];
        }
      }*/
    }

    comprarProducto(){
      console.log(this.comprar);
      this.productos.save(this.comprar).$promise
      .then(response =>{
        console.log("guardar comprar", response);
        this.comprar = {
          idProducto:{
            id:null
          }
        };

      })
      .catch(err => console.error(err));
    }


     selecProducto(item){
      this.compra.idProducto.id = item.id;
      this.selecProducto = item;
     }
     }
   

  angular.module('contratista2017App')
    .component('tienda', {
      templateUrl: 'app/tienda/tienda.html',
      controller: TiendaComponent,
      controllerAs:'vm'
    });

  })();
