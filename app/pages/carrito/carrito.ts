import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarritoService } from '../../providers/carrito-service/carrito-service';
import {CatalogoDetailPage } from '../catalogo-detail/catalogo-detail';

/*
  Generated class for the CarritoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/carrito/carrito.html',
})
export class CarritoPage {

  carro:any;
  total: any;

  constructor(private navCtrl: NavController, private carrito:CarritoService) {

  }

  ionViewDidEnter() {
    this.carro = this.carrito.getCart();
    // console.log(this.carrito.Item);

    this.total = this.carrito.getTotalPrice();
    console.log(this.total);

  }

  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(CatalogoDetailPage, sessionData);
  }

  quitar(carr, i){
    this.carrito.deleteItem(carr, i);
  }

}
