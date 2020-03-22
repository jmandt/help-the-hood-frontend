import { Component } from '@angular/core';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {ModalController} from '@ionic/angular';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import {JobsService} from '../services/jobs/jobs.service';
import {Job} from '../models';

@Component({
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.page.html',
  styleUrls: ['scoreboard.page.scss']
})
export class ScoreboardPage {

  jobs: Job[] = [];

  constructor(public modalController: ModalController,
              private jobsService: JobsService) {
    const today = moment();
    this.jobsService.getAll()
        // .pipe( map(jobs => jobs.filter(job => today.isSameOrBefore(job.startDate.toDate()))))
        .subscribe((jobs: Job[]) => this.jobs = jobs);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewJobModalComponent
    });
    return await modal.present();
  }


}
