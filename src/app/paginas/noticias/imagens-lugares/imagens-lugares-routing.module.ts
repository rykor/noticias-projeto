import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagensLugaresPage } from './imagens-lugares.page';

const routes: Routes = [
  {
    path: '',
    component: ImagensLugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagensLugaresPageRoutingModule {}
