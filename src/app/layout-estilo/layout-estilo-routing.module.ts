import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutEstiloPage } from './layout-estilo.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutEstiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutEstiloPageRoutingModule {}
