import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Productos } from '../../providers/productos/productos';
import { CatalogoDetailPage } from '../catalogo-detail/catalogo-detail';

/*
  Generated class for the CatalogoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/catalogo/catalogo.html',
  providers: [Productos]
})
export class CatalogoPage {

  usuarios=[];
  product=[];

  constructor(private navCtrl: NavController, public prod: Productos) {

  }

//Con esta función traemos los datos desde el provider, en este caso el provider Productos
  buscar(){
    this.prod.getUser().then(data => {
      this.usuarios.push(data);
      this.product.push(this.usuarios[0].productos);
      console.log(this.product[0]);
    });

  }

  ngAfterViewInit() {
    this.buscar();
  }

  goToSessionDetail(sessionData) {
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(CatalogoDetailPage, sessionData);
  }

}
