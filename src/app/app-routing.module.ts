import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout-tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then(m => m.CameraPageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then(m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutPageModule)
  },
  {
    path: 'layout-headerfooter',
    loadChildren: () => import('./layout-headerfooter/layout-headerfooter.module').then(m => m.LayoutHeaderfooterPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then(m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-splitpane',
    loadChildren: () => import('./layout-splitpane/layout-splitpane.module').then(m => m.LayoutSplitpanePageModule)
  }, {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then(m => m.LayoutTabsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./tabs/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'tabs.home',
    loadChildren: () => import('./tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'layout-grid',
    loadChildren: () => import('./layout-grid/layout-grid.module').then( m => m.LayoutGridPageModule)
  },
  {
    path: 'layout-estilo',
    loadChildren: () => import('./layout-estilo/layout-estilo.module').then( m => m.LayoutEstiloPageModule)
  },
  {
    path: 'api-externa',
    loadChildren: () => import('./api-externa/api-externa.module').then( m => m.ApiExternaPageModule)
  },
  {
    path: 'correios',
    loadChildren: () => import('./correios/correios.module').then( m => m.CorreiosPageModule)
  },
  {
    path: 'componente',
    loadChildren: () => import('./componente/componente.module').then( m => m.ComponentePageModule)
  }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
