import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select, Store} from '@ngxs/store';

import { NewJob, User } from 'src/app/models';
import {UserState} from 'src/app/store/state';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JobsService {
    // @ts-ignore
    @Select(UserState) user$: Observable<User>;
    user: User;

    constructor(private db: AngularFirestore, private store: Store,
    ) {
        this.user$.subscribe(user => this.user = user);
    }


    storeNewJob(newJob: NewJob) {
        const id = this.db.createId();
        const insert = ({id, creationTime: new Date(), name: this.user.name, uid: this.user.uid, status: 'new', ...newJob});
        return this.db.collection('user').doc(this.user.uid).collection('/jobs').doc(id).set(insert);
    }

    getAll() {
        return this.db.collectionGroup<NewJob>('jobs', ref =>
            ref.where('status', '==', 'new').orderBy('creationTime', 'desc')).valueChanges();
    }

    getJobById(uid, id) {
        return this.db.collection('user').doc(uid).collection('jobs', ref => ref.where('id', '==', id)).valueChanges();
    }

    updateStatus(uid, id: string) {
        return this.db.collection('user').doc(uid).collection('jobs').doc(id).update({status: 'commited'});
    }
}
