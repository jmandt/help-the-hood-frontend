import { Component, OnDestroy } from '@angular/core';
import {AuthService} from '../services/auth';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

import { User } from 'src/app/models';
import { UserState } from 'src/app/store';

@Component({
  selector: 'app-rewards',
  templateUrl: 'rewards.page.html',
  styleUrls: ['rewards.page.scss']
})
export class RewardsPage implements OnDestroy {

  @Select(UserState) user$: Observable<User>;

  public user: User;

  private subscriptions: Subscription[] = [];

  constructor() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
