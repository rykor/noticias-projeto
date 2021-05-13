import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfieUsuariosPage } from './selfie-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: SelfieUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfieUsuariosPageRoutingModule {}
