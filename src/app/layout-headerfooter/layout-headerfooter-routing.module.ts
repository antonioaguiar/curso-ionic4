import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHeaderfooterPage } from './layout-headerfooter.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeaderfooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutHeaderfooterPageRoutingModule {}
