import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

import { SharedComponentModule } from 'src/app/shared';
import { RewardsPage } from './rewards.page';
import { RewardCardComponent } from './card';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RewardsPage, ...canActivate(redirectUnauthorizedTo(['/auth/login']))}]),
    SharedComponentModule
  ],
  declarations: [
    RewardsPage,
    RewardCardComponent
  ]
})
export class RewardsModule {}
