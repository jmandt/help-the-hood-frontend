import {Component, OnDestroy} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';

import {Reward, User} from 'src/app/models';
import {UserState} from 'src/app/store';

@Component({
    selector: 'app-rewards',
    templateUrl: 'rewards.page.html',
    styleUrls: ['rewards.page.scss']
})
export class RewardsPage implements OnDestroy {

    @Select(UserState) user$: Observable<User>;

    public user: User;
    public rewards: Reward[] = [];

    private subscriptions: Subscription[] = [];

    constructor(
        db: AngularFirestore
    ) {
        this.subscriptions.push(
            this.user$.subscribe(user => {
                this.user = user;
            }),

            db.collection<Reward>('reward').valueChanges().subscribe(rewards => {
                this.rewards = rewards;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}
