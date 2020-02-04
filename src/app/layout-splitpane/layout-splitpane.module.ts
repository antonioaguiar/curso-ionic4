import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutSplitpanePageRoutingModule } from './layout-splitpane-routing.module';

import { LayoutSplitpanePage } from './layout-splitpane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSplitpanePageRoutingModule
  ],
  declarations: [LayoutSplitpanePage]
})
export class LayoutSplitpanePageModule {}
