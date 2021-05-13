import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasPage } from './noticias.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasPage
  },
  {
    path: 'imagens-lugares',
    loadChildren: () => import('./imagens-lugares/imagens-lugares.module').then( m => m.ImagensLugaresPageModule)
  },
  {
    path: 'selfie-usuarios',
    loadChildren: () => import('./selfie-usuarios/selfie-usuarios.module').then( m => m.SelfieUsuariosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasPageRoutingModule {}
