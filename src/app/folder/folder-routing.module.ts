import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { DescargarPage } from "../descargar/descargar.page";

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children:[{
      path:'paquetes',
      loadChildren:'../descargar/descargar.page'

    }]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
