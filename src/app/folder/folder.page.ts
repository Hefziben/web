import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUsers,faFilm, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
faUser = faUsers;
fafilm = faFilm;
youtube = faYoutube;
userplus = faUserPlus;
nombre;
email;
subject;
mensaje;
pais;
public messageForm: FormGroup;
public banners = [
// {
//   image:"../../assets/images/banner1.png",
//   pagina:'/'
// },
{
  image:"../../assets/images/banner2.png",
  pagina:'/paquetes'
},
{
  image:"../../assets/images/banner3.png",
  pagina:'/descargar'
}
];
  constructor(    private fb: FormBuilder,private activatedRoute: ActivatedRoute, private router:Router, private navCtrl:NavController) {
    this.messageForm = fb.group({
      nombre: [""],
      asunto: [""],
      email: [""],
      pais: [""],
    mensaje:[""]
   });
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  emaildata(){
    const asunto = this.messageForm.value.asunto;
    const correo = this.messageForm.value.email;
    const nombre = this.messageForm.value.nombre;
    const pais = this.messageForm.value.pais;
    const mensaje = this.messageForm.value.mensaje;
    const body = "Hola me llamo "+ nombre + " de " + pais + ", " + "mi email es " + correo + ", "  + mensaje;
    this.email = "mailto:magistvlatino@gmail.com?subject=" + asunto + "&body=" + body;
    console.log(this.email);        
  }
 

  sendEmail(){
this.messageForm.reset();
  }

   

   
   
  public slidesConfig = {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    initialSlide: 1,
    breakpointsInverse: true,
    loop: true,
    autoplay:true
  };

  gotoPage(page){
    this.navCtrl.navigateForward(page, { animated: false })
  }

}
