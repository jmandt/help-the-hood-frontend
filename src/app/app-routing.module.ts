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
    path: 'user',
    loadChildren: () =>
        import('./user/user.module').then(m => m.UserPageModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
