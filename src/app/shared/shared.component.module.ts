import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import localeDe from '@angular/common/locales/de';

import {AlgoliaSearchComponent} from './algolia-search';
import {CategoryIconComponent} from './category-icon/category-icon.component';
import {PasswordResetButtonComponent} from './password-reset-button/password-reset-button.component';
import {CircledIconComponent} from './circled-icon/circled-icon.component';


registerLocaleData(localeDe, 'de');


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule
    ],
    declarations: [
        AlgoliaSearchComponent,
        CategoryIconComponent,
        PasswordResetButtonComponent,
        CircledIconComponent
    ],
    exports: [
        AlgoliaSearchComponent,
        CategoryIconComponent,
        PasswordResetButtonComponent,
        CircledIconComponent
    ],
    providers: [],
})
export class SharedComponentModule {
}
