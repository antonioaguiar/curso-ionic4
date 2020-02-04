import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutEstiloPageRoutingModule } from './layout-estilo-routing.module';

import { LayoutEstiloPage } from './layout-estilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutEstiloPageRoutingModule
  ],
  declarations: [LayoutEstiloPage]
})
export class LayoutEstiloPageModule {}
