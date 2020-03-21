import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {take} from 'rxjs/operators';
import {User} from '../../models';
import {UserAction} from '../../store/actions';
import {AuthService} from '../../services/auth';
import {Router} from '@angular/router';
import {CoreService} from '../../services/core';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./../auth.component.scss'],
})
export class SocialLoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router,
              private coreService: CoreService,
              private store: Store,
              private db: AngularFirestore
  ) { }

  ngOnInit() {}

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
    this.db.collection('user').doc(res.user.uid).valueChanges().pipe(
        take(1)
    ).subscribe((user: User) => {
      this.store.dispatch(new UserAction.Set(user));
    });
    this.coreService.showToastWithButton(
        `Welcome, ${res.user.displayName}`,
        'success'
    );
    this.router.navigateByUrl('/userProfile-overview');
  }

}
