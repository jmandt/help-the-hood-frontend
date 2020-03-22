import { IonicModule } from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsPage } from './jobs.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {InteractionCardComponent} from './interaction-card/interaction-card.component';
import {SharedComponentModule} from '../shared';

const routes: Routes = [
  {
    path: '',
    component: JobsPage,
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
  declarations: [JobsPage, InteractionCardComponent]
})
export class JobsPageModule {}
