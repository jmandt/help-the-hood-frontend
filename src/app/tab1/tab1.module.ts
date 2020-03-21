import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {SharedComponentModule} from '../shared';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
        SharedComponentModule,
        ReactiveFormsModule
    ],
    declarations: [Tab1Page, NewJobModalComponent],
    entryComponents: [NewJobModalComponent]
})
export class Tab1PageModule {
}
