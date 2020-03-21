import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {State, Store} from '@ngxs/store';
import {User} from '../../models';
import {UserState} from '../../store/state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @ts-ignore
  @State(UserState) user$: Observable<User>;
  user: User;
  constructor(private db: AngularFirestore, private store: Store,
  ) {
    this.user$.subscribe(user => console.log(user));
  }

  update(changeData) {
    this.db.collection('user').doc(this.user.uid).update(changeData);
  }
}
