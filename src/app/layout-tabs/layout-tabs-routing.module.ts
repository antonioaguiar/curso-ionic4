import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutTabsPage } from './layout-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutTabsPage,
    children: [
      {
        path: 'tabs.home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/speakers/speakers.module').then(m => m.SpeakersPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs/about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs.home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutTabsPageRoutingModule { }
