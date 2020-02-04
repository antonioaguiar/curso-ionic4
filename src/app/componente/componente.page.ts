import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.page.html',
  styleUrls: ['./componente.page.scss'],
})
export class ComponentePage implements OnInit {
 
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async abrirComponente(componente) {
    console.log(componente);
     
    if (componente == "action-sheet") {
      let actionSheet = await this.actionSheetCtrl.create({
        header: "Menu de opções",
        buttons: [
          {
            text: "Button 1", role: "desctructive", icon: "trash",
            handler: () => {
              console.log("botão 1");
              
            }
          },
          {
            text: "Button 2", role: "desctructive", icon: "trash",
            handler: () => {
              console.log("botão 2");
              
            }
          },
          {
            text: "Cancelar", role: "cancel", icon: "close",
            handler: () => {
              console.log("Cancelar");
              
            }
          },
        ]
      });
      await actionSheet.present();
    }
   
  }
}
