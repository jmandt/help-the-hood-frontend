import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth';
import {CoreService} from '../../services/core';

@Component({
    selector: 'app-password-reset-button',
    templateUrl: './password-reset-button.component.html',
    styleUrls: ['./password-reset-button.component.scss'],
})
export class PasswordResetButtonComponent implements OnInit{
    @Input() email = undefined;
    @Input() title = 'Link senden';

    EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    public forgotPasswordForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private coreService: CoreService
    ) {
    }

    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            email: [this.email ? this.email : '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern(this.EMAIL_REGEX)
                ])
            ]
        });
    }

    reset_password() {
        this.authService
            .sendResetEmail(this.forgotPasswordForm.controls.email.value)
            .then(() => {
                this.coreService.showToast(
                    'Link has sent to your email address ' +
                    this.forgotPasswordForm.controls.email.value,
                    'success'
                );
            })
            .catch(error => {
                this.coreService.showToast(error.message, 'danger');
            });
    }
}
