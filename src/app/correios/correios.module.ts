import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreiosPageRoutingModule } from './correios-routing.module';

import { CorreiosPage } from './correios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreiosPageRoutingModule
  ],
  declarations: [CorreiosPage]
})
export class CorreiosPageModule {}
