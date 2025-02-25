import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { BtnCerrarSesionComponentComponent } from '../components/btn-cerrar-sesion-component/btn-cerrar-sesion-component.component';
import { FormatoEspeletiaModuleModule } from '../components/formato-espeletia-module/formato-espeletia-module.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    FormatoEspeletiaModuleModule

  ],
  declarations: [
    Tab3Page,
    BtnCerrarSesionComponentComponent,
  ]
})
export class Tab3PageModule {}
