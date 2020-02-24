import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistribuidoresPageRoutingModule } from './distribuidores-routing.module';

import { DistribuidoresPage } from './distribuidores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistribuidoresPageRoutingModule
  ],
  declarations: [DistribuidoresPage]
})
export class DistribuidoresPageModule {}
