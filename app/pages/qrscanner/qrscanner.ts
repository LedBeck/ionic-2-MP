import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import { QrsuccessPage } from '../qrsuccess/qrsuccess';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the QrscannerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/qrscanner/qrscanner.html',
})
export class QrscannerPage {

  data :any;

  constructor(private navCtrl: NavController, public nav: Nav,public http: Http) {

  }
  scanDetails(details) {
    this.nav.push(QrsuccessPage, {details: details});
  }

  click() {
    BarcodeScanner.scan()
    .then((result) => {
      if (!result.cancelled) {
        const barcodeData = new BarcodeData(result.text, result.format);
        this.scanDetails(barcodeData);
      }
    })
    .catch((err) => {
      alert(err);
    })
  }

  generar(id) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.

      this.http.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`).subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        //this.data = this.processData(res.json());
        this.data=res.url;
        console.log(this.data);
        console.log(res.status);
        // resolve(this.data);
        // console.log(resolve(this.data));
      });
    });
  }

}

export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {}
}
