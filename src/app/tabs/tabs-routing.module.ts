import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children : [
          {
            path: '',
            loadChildren: () => 
                import('../tab1/tab1.module').then(m => m.Tab1PageModule)

          }
        ]
      },
      {
        path: 'dispositivos',
        children : [
          {
            path : '',
            loadChildren: () => 
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'ajustes',
        children : [
          {
            path : '',
            loadChildren: () => 
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)

          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path : '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
