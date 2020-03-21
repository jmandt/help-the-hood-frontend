import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';
import {NewRequestModalComponent} from './new-request-modal/new-request-modal.component';
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
    declarations: [Tab1Page, NewRequestModalComponent],
    entryComponents: [NewRequestModalComponent]
})
export class Tab1PageModule {
}
