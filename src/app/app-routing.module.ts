import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {WelcomeGuard} from './guards/welcome.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [WelcomeGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
        import('./welcome/welcome.module').then(m => m.WelcomePageModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
        import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
