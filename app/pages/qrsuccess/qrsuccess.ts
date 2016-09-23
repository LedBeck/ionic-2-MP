import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the QrsuccessPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/qrsuccess/qrsuccess.html',
})
export class QrsuccessPage {

barcodeData: any;
  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.barcodeData = navParams.get('details');
  }

}
