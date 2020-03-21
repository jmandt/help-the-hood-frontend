import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, CoreService} from '../../services';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./../auth.component.scss'],
})
export class SignupPage {
    public registerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private afs: AngularFirestore,
        private authService: AuthService,
        private coreService: CoreService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            email: new FormControl(
                '', [Validators.compose([Validators.required, Validators.email])]
            ),
            firstName: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ])),
            lastName: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(4)
            ])),
            password: new FormControl(
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
                ])
            )
        });
    }

    register() {
        this.authService
            .doRegister(this.registerForm.value)
            .then(() => {
                this.coreService.showToast(
                    'Verification link has been sent to ' +
                    this.registerForm.controls.email.value,
                    'success'
                );
                this.router.navigateByUrl('/home');
            })
            .catch(error => {
                this.coreService.showToast(error.message, 'danger');
            });
    }


}
