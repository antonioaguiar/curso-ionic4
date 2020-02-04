import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Principal',
      url: '/layout-tabs/tabs.home',
      icon: 'home'
    },
    {
      title: 'Listar',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Câmera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Instalação',
      url: '/instalacao',
      icon: 'build'
    },
    {
      title: 'Menu',
      url: '/layout-menu',
      icon: 'cube'
    },
    {
      title: 'Layout',
      url: '/layout',
      icon: 'open'
    },
    {
      title: 'Correios',
      url: '/correios',
      icon: 'mail'
    },{
      title: 'Componentes',
      url: '/componente',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
