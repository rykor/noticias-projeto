import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfieUsuariosPageRoutingModule } from './selfie-usuarios-routing.module';

import { SelfieUsuariosPage } from './selfie-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfieUsuariosPageRoutingModule
  ],
  declarations: [SelfieUsuariosPage]
})
export class SelfieUsuariosPageModule {}
