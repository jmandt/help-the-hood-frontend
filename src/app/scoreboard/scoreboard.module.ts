import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ScoreboardPage} from './scoreboard.page';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {SharedComponentModule} from '../shared';
import {JobDetailsComponent} from './job-details/job-details.component';
import {JobCardComponent} from './job-card/job-card.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ScoreboardPage}]),
        SharedComponentModule,
        ReactiveFormsModule
    ],
    declarations: [ScoreboardPage, NewJobModalComponent, JobDetailsComponent, JobCardComponent],
    entryComponents: [NewJobModalComponent, JobDetailsComponent, JobCardComponent]
})
export class ScoreboardModule {
}
