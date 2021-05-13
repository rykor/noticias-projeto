import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagensLugaresPageRoutingModule } from './imagens-lugares-routing.module';

import { ImagensLugaresPage } from './imagens-lugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagensLugaresPageRoutingModule
  ],
  declarations: [ImagensLugaresPage]
})
export class ImagensLugaresPageModule {}
