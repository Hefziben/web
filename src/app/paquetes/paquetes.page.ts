import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.page.html',
  styleUrls: ['./paquetes.page.scss'],
})
export class PaquetesPage implements OnInit {

  constructor(private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  gotoPage(page){
    this.navCtrl.navigateForward(page, { animated: false })
  }

}
