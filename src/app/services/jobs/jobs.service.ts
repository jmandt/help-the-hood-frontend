import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {NewJob} from '../../models';
import {Store} from '@ngxs/store';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    uid;

    constructor(private db: AngularFirestore, private store: Store,
    ) {}


    storeNewJob(newJob: NewJob) {
        const id = this.db.createId();
        const insert = ({creationTime: new Date(), ...newJob});
        return this.db.collection('user').doc(this.uid).collection('/jobs').doc(id).set(insert);
    }

    getAll() {
        return this.db.collection<NewJob>('/jobs', ref =>
            ref.orderBy('creationTime', 'desc')).valueChanges({idField: 'id'});
    }

    getJobById(id) {
        return this.db.collection('/jobs').doc(id).valueChanges();
    }

    updateStatus(id: string) {
        return this.db.collection('jobs').doc(id).update({status: 'commited'});
    }
}
