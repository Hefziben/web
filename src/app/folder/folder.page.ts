import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUsers,faFilm, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavController } from '@ionic/angular';


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
public banners = [
{
  image:"../../assets/images/banner1.png"
},
{
  image:"../../assets/images/banner2.png"
},
{
  image:"../../assets/images/banner3.png"
}
];
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
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
