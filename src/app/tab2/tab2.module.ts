import { IonicModule } from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {InteractionCardComponent} from './interaction-card/interaction-card.component';
import {SharedComponentModule} from '../shared';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    ...canActivate(redirectUnauthorizedTo(['/auth/login']))
  }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedComponentModule
    ],
  declarations: [Tab2Page, InteractionCardComponent]
})
export class Tab2PageModule {}
