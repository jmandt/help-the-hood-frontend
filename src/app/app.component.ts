import { Component } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import { switchMap, filter, map } from 'rxjs/operators';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {UserAction, UserState} from './store';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  uid;
  @Select(UserState) user$: Observable<User>;
  userIsAuthenticated = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store,
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.initializeApp();
    this.user$.subscribe(user => this.userIsAuthenticated = !!user && user.uid !== undefined);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.afAuth.user.pipe(
        filter(user => !!user),
        map(user => this.uid = user.uid ),
        switchMap(id => this.db.collection('user').doc(id).valueChanges())
      ).subscribe((user: User) => {
        this.store.dispatch(new UserAction.Set({uid: this.uid, ...user}));
      });
    });
  }
}
