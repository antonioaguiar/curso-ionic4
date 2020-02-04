import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreiosPage } from './correios.page';

const routes: Routes = [
  {
    path: '',
    component: CorreiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreiosPageRoutingModule {}
