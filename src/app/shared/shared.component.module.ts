import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import localeDe from '@angular/common/locales/de';

import {AlgoliaSearchComponent} from './algolia-search';


registerLocaleData(localeDe, 'de');


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        AlgoliaSearchComponent,
    ],
    exports: [
        AlgoliaSearchComponent,
    ],
    providers: [],
})
export class SharedComponentModule {
}
