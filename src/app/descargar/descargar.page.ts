import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.page.html',
  styleUrls: ['./descargar.page.scss'],
})
export class DescargarPage implements OnInit {
  private fileTransfer: FileTransferObject;

  constructor(private transfer: FileTransfer, private navCtrl:NavController) { }


  ngOnInit() {
  }
  gotoPage(pagina) {
    this.navCtrl.navigateForward(pagina, { animated: false });
  }
  download() {
    console.log('here');
    
    const url = 'http://magistvchile.xyz/app/tvbox.apk';
    this.fileTransfer.download(url, 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  } 
}
