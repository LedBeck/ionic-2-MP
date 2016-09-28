import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navParams: NavParams) {
      this.products = navParams.data;
  }

}
