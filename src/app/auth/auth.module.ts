import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SignupPage} from './signup/signup.page';
import {SharedComponentModule} from '../shared';
import {PwForgotPage} from './pw-forgot/pw-forgot.page';
import {LoginPage} from './login/login.page';
import {TabsPage} from '../tabs/tabs.page';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: 'password-forgot',
        component: PwForgotPage
    },
    {
        path: 'sign-up',
        component: SignupPage
    }
    ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedComponentModule
    ],
    declarations: [
        SignupPage,
        LoginPage,
        PwForgotPage
    ]
})
export class AuthModule {
}
