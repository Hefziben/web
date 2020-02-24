import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.page.html',
  styleUrls: ['./descargar.page.scss'],
})
export class DescargarPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  gotoPage(pagina) {
    this.navCtrl.navigateForward(pagina, { animated: false });
  }
}
