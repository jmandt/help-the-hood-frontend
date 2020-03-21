import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {SharedComponentModule} from '../shared';
import {JobDetailsComponent} from './job-details/job-details.component';
import {JobCardComponent} from './job-card/job-card.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
        SharedComponentModule,
        ReactiveFormsModule
    ],
    declarations: [Tab1Page, NewJobModalComponent, JobDetailsComponent, JobCardComponent],
    entryComponents: [NewJobModalComponent, JobDetailsComponent, JobCardComponent]
})
export class Tab1PageModule {
}
