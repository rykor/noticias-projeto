import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarCadastroPage } from './visualizar-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarCadastroPageRoutingModule {}
