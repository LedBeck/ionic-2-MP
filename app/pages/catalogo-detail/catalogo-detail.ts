import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoService } from '../../providers/carrito-service/carrito-service';
import { CarritoPage } from '../carrito/carrito';

/*
  Generated class for the CatalogoDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/catalogo-detail/catalogo-detail.html',
})
export class CatalogoDetailPage {

products: any;
numero = 1;
contador = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CarritoService) {
      this.products = navParams.data;
  }

  addToCart(){
    for(this.contador; this.contador < this.numero; this.contador++){
      this.cartService.addItem(this.products);
    }
  //  this.numero = 1;
      this.navCtrl.setRoot(CarritoPage);

      //  console.log(this.cartService.getTotalPrice())
    }

    mas(){
      this.numero++;
    }

    menos(){
      if(this.numero != 1){
        this.numero--;
      }
    }

}
