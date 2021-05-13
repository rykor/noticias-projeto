import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarCadastroPageRoutingModule } from './visualizar-cadastro-routing.module';

import { VisualizarCadastroPage } from './visualizar-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarCadastroPageRoutingModule
  ],
  declarations: [VisualizarCadastroPage]
})
export class VisualizarCadastroPageModule {}
