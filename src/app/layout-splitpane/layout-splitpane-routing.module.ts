import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSplitpanePage } from './layout-splitpane.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutSplitpanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutSplitpanePageRoutingModule {}
