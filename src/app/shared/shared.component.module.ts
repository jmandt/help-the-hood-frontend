import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import localeDe from '@angular/common/locales/de';

import {AlgoliaSearchComponent} from './algolia-search';
import {CategoryIconComponent} from './category-icon/category-icon.component';


registerLocaleData(localeDe, 'de');


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        AlgoliaSearchComponent,
        CategoryIconComponent
    ],
    exports: [
        AlgoliaSearchComponent,
        CategoryIconComponent
    ],
    providers: [],
})
export class SharedComponentModule {
}
