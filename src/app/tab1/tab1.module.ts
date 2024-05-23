import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CirculoDeDatosBluetoothComponentComponent } from '../components/circulo-de-datos-bluetooth-component/circulo-de-datos-bluetooth-component.component';
import { Row3PorcentajesComponentComponent } from '../components/row3-porcentajes-component/row3-porcentajes-component.component';
import { HistoryTableComponentComponent } from '../components/history-table-component/history-table-component.component';
import { FormatoEspeletiaModuleModule } from '../components/formato-espeletia-module/formato-espeletia-module.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    FormatoEspeletiaModuleModule
  ],
  declarations: [
    Tab1Page,
    CirculoDeDatosBluetoothComponentComponent,
    Row3PorcentajesComponentComponent,
    HistoryTableComponentComponent,

  ]
})
export class Tab1PageModule {}
