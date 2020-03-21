import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import localeDe from '@angular/common/locales/de';

import {AlgoliaSearchComponent} from './algolia-search';
import {CategoryIconComponent} from './category-icon/category-icon.component';
import {PasswordResetButtonComponent} from './password-reset-button/password-reset-button.component';


registerLocaleData(localeDe, 'de');


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        AlgoliaSearchComponent,
        CategoryIconComponent,
        PasswordResetButtonComponent
    ],
    exports: [
        AlgoliaSearchComponent,
        CategoryIconComponent,
        PasswordResetButtonComponent
    ],
    providers: [],
})
export class SharedComponentModule {
}
