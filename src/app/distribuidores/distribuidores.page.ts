import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.page.html',
  styleUrls: ['./distribuidores.page.scss'],
})
export class DistribuidoresPage implements OnInit {

  constructor(private navCtrl:NavController ) { }

  ngOnInit() {
  }
  gotoPage(pagina) {
    this.navCtrl.navigateForward(pagina, { animated: false });
  }
}
