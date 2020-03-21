import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';

import {AuthService, CoreService} from '../../services';
import { UserAction } from 'src/app/store';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./../auth.component.scss'],
})
export class LoginPage {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
      public authService: AuthService,
      private router: Router,
      private fb: FormBuilder,
      private coreService: CoreService,
      private store: Store
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryLogin() {
    this.authService.doLogin(this.loginForm.value)
        .then(res => {
          this.store.dispatch(new UserAction.Set(res.user));
          this.router.navigate(['/home']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.coreService.showToast(this.errorMessage, 'primary');
        });
  }
  googleLogin() {
    this.authService
        .googleLogin()
        .then(res => {
          this.socialLoginResult(res);
        })
        .catch(err => {
          this.coreService.showToast(err.message, 'primary');
        });
  }

  facebookLogin() {
    this.authService
        .facebookLogin()
        .then(res => {
          this.socialLoginResult(res);
        })
        .catch(err => {
          this.coreService.showToast(err.message, 'primary');
        });
  }

  socialLoginResult(res) {
    if (res.additionalUserInfo.isNewUser) {
      this.authService.saveUser(res);
    } else {
      this.authService.setLastLogin(res);
    }
    this.store.dispatch(new UserAction.Set(res.user));
    this.coreService.showToastWithButton(
        `Welcome, ${res.user.displayName}`,
        'success'
    );
    this.router.navigateByUrl('/profile-overview');
  }
}
