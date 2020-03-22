import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RewardsPage } from './rewards.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RewardsPage, ...canActivate(redirectUnauthorizedTo(['/auth/login']))}])
  ],
  declarations: [RewardsPage]
})
export class RewardsModule {}
