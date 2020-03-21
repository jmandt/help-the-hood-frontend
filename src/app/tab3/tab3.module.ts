import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page, ...canActivate(redirectUnauthorizedTo(['/auth/login']))}])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
