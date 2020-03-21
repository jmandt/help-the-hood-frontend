import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select, Store} from '@ngxs/store';
import {User} from '../../models';
import {UserState} from '../../store/state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @ts-ignore
  @Select(UserState) user$: Observable<User>;
  user: User;
  constructor(private db: AngularFirestore, private store: Store,
  ) {
    this.user$.subscribe(user => this.user = user);
  }

  update(changeData) {
    this.db.collection('user').doc(this.user.uid).update(changeData);
  }
}
