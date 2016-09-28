import { Component, ViewChild } from '@angular/core';

import { NavController,Nav, MenuController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { CatalogoPage } from '../catalogo/catalogo';
import { UserData } from '../../providers/user-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  @ViewChild(Nav) nav: Nav;

  login: {username?: string, password?: string} = {};
  submitted = false;
  data: any;
  local = [];

  constructor(public navCtrl: NavController, public userData: UserData, public http: Http, public menu: MenuController) { }

  onLogin(form) {

    var datos = JSON.stringify({
        username: form.form._value.username,
        password: form.form._value.password
      });

    this.submitted = true;

    this.http.post('http://localhost/ionic2MP_servidor/login.php',datos).subscribe(res => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      //this.data = this.processData(res.json());
      this.data=res.status;
      //console.log(this.data);

      if (this.data = 200) {



        this.data = this.processData(res.json());
        // console.log(res);
        this.local = res.json();
        // console.log(this.local[0].qr);
        this.userData.login(this.login.username, this.local[0].qr, this.local[0].id);
        // this.navCtrl.push(CatalogoPage);
        this.navCtrl.setRoot(CatalogoPage);
      }else{
        alert('Error en usuario y/o contraseña!');
        console.log("Error en Login");
      }
      // console.log(res.status);
      // resolve(this.data);
      // console.log(resolve(this.data));
    });

  }

  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions

    data.tracks = [];

    // console.log(data[0]);
    // loop through each day in the schedule
    data.forEach(datos => {
      // console.log(datos);
    });

    return data;
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }
}
