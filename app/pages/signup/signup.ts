import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/signup/signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string,nombre?: string, apellido?: string, email?:string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public http: Http) {}

  onSignup(form) {
    //Mandar datos al servidor
    var link = 'http://localhost/ionic2MP_servidor/registro_usuario.php';
    var datos = JSON.stringify({
        username: form.form._value.username,
        password: form.form._value.password,
        nombre: form.form._value.nombre,
        apellidos: form.form._value.apellidos,
        email: form.form._value.email
      });

      console.log(datos);

       this.http.post(link, datos)
       .subscribe(data => {
         console.log(data);
       }, error => {
           console.log("Oooops!");
       });


    console.log(form);
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
}
