import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {NewRequest} from '../models/request.models';

@Injectable({
    providedIn: 'root'
})
export class RequestsService {


    constructor(private db: AngularFirestore) {
    }

    store(newRequest: NewRequest) {
        const id = this.db.createId();
        const insert = ({creationTime: new Date(), ...newRequest});
        return this.db.collection('/requests').doc(id).set(insert);
    }

}
