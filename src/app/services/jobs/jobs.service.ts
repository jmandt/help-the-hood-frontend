import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select, Store} from '@ngxs/store';

import {Job, User} from 'src/app/models';
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


    storeNewJob(newJob: Job) {
        const id = this.db.createId();
        const insert = ({id, creationTime: new Date(), name: this.user.name, uid: this.user.uid, status: 'new', ...newJob});
        return this.db.collection('user').doc(this.user.uid).collection('/jobs').doc(id).set(insert);
    }

    getAll() {
        return this.db.collectionGroup<Job>('jobs', ref =>
            ref.where('status', '==', 'new').orderBy('creationTime', 'desc')).valueChanges();
    }

    getJobById(uid, id) {
        return this.db.collection('user').doc(uid).collection('jobs', ref => ref.where('id', '==', id)).valueChanges();
    }

    commitToJob(uid, id: string, job) {
        console.log(job);
        const docID = this.db.createId();
        this.db.collection('user').doc(this.user.uid).collection('jobsTaken').doc(docID).set({
            takenTimestamp: new Date(), ...job,
            takenId: docID
        });
        return this.db.collection('user').doc(uid).collection('jobs').doc(id).update({status: 'committed', committedBy: this.user});
    }

    getAllCommittedJobsByUser() {
        return this.db.collection('user').doc(this.user.uid).collection('jobsTaken').valueChanges();
    }

    getAllPostedJobsByUser() {
        return this.db.collection('user').doc(this.user.uid).collection('/jobs').valueChanges();
    }

    acceptHelp(jobId, committedUserId, takenId) {
        this.db.collection('user').doc(this.user.uid)
            .collection('jobs').doc(jobId)
            .update({status: 'inProgress', inProgressChangeTime: new Date()});

        this.db.collection('user').doc(committedUserId)
            .collection('jobsTaken').doc(takenId)
            .update({status: 'inProgress', inProgressChangeTime: new Date()});
    }

    denyHelp(jobId) {
        this.db.collection('user').doc(this.user.uid)
            .collection('jobs').doc(jobId)
            .update({committedBy: {}, status: 'new', declinedChangeTime: new Date()});
    }

    markAsDone(jobId, committedUserId, takenId) {
        this.db.collection('user').doc(this.user.uid)
            .collection('jobs').doc(jobId)
            .update({status: 'done', doneChangeTime: new Date()});

        this.db.collection('user').doc(committedUserId)
            .collection('jobsTaken').doc(takenId)
            .update({status: 'done', doneChangeTime: new Date()});
    }

}
