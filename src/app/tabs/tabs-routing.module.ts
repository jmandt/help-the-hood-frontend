import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scoreboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../scoreboard/scoreboard.module').then(m => m.ScoreboardModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'rewards',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../rewards/rewards.module').then(m => m.RewardsModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/scoreboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/scoreboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
