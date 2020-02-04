import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutHeaderfooterPageRoutingModule } from './layout-headerfooter-routing.module';

import { LayoutHeaderfooterPage } from './layout-headerfooter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutHeaderfooterPageRoutingModule
  ],
  declarations: [LayoutHeaderfooterPage]
})
export class LayoutHeaderfooterPageModule {}
