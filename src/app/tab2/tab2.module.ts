import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { FormatoEspeletiaModuleModule } from '../components/formato-espeletia-module/formato-espeletia-module.module';
import { MenuDesplegableComponentComponent } from '../components/menu-desplegable-component/menu-desplegable-component.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    FormatoEspeletiaModuleModule
    

  ],
  declarations: [Tab2Page,
    MenuDesplegableComponentComponent
    
  ]
})
export class Tab2PageModule {}
