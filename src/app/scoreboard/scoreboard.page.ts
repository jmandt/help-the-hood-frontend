import { Component, OnDestroy } from '@angular/core';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {ModalController} from '@ionic/angular';
import { Select } from '@ngxs/store';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {JobsService} from '../services/jobs/jobs.service';
import {Job, User} from '../models';
import { UserState } from '../store';

@Component({
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.page.html',
  styleUrls: ['scoreboard.page.scss']
})
export class ScoreboardPage implements OnDestroy {

  @Select(UserState) user$: Observable<User>;

  jobs: Job[] = [];
  isAuthenticated = false;

  private subscriptions: Subscription[] = [];

  constructor(public modalController: ModalController,
              private jobsService: JobsService,
              private router: Router) {
    const today = moment();
    this.subscriptions.push(
      this.jobsService.getAll()
          .pipe(
            map(jobs => jobs.filter(job => today.isSameOrBefore(job.startDate)))
          ).subscribe((jobs: Job[]) => this.jobs = jobs),

      this.user$.pipe(
        map(user => !!user.uid)
      ).subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  async presentModal() {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return;
    }

    const modal = await this.modalController.create({
      component: NewJobModalComponent
    });
    return await modal.present();
  }


}
