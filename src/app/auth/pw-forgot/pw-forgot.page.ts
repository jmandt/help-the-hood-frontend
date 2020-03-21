import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, CoreService} from '../../services';

@Component({
  selector: 'app-pw-forgot',
  templateUrl: './pw-forgot.page.html',
  styleUrls: ['./../auth.component.scss'],
})
export class PwForgotPage {

  EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  public forgotPasswordForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private coreService: CoreService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: [
        '',
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
