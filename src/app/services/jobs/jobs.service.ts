import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {NewJob} from '../../models/jobs.models';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    constructor(private db: AngularFirestore) {
    }

    store(newJob: NewJob) {
        const id = this.db.createId();
        const insert = ({creationTime: new Date(), ...newJob});
        return this.db.collection('/jobs').doc(id).set(insert);
    }

    getAll() {
        return this.db.collection('/jobs', ref => ref.orderBy('creationTime', 'desc')).valueChanges();
    }
}