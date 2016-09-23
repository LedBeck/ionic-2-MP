import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GenerarQr provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GenerarQr {
data :any;
  constructor(private http: Http) {}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        //this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

}
