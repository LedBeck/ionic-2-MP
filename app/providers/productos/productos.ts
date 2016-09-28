import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the Productos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Productos {

  data:any[];

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
    this.http.get(`http://eon-mkt.com/catalogo/json.php`).subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        console.log(res.json());
        this.data = res.json();
        resolve(this.data);

      });
    });
  }

  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions

    data.tracks = [];

    // loop through each day in the schedule
    data.notifications.forEach(day => {
      // loop through each timeline group in the day

          //this.processSession(data, session);

    });

    return data;
  }

  getUser(){

        return this.load();

  }

}
