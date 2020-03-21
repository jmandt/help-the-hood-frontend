import { Component } from '@angular/core';
import {NewJobModalComponent} from './new-job-modal/new-job-modal.component';
import {ModalController} from '@ionic/angular';
import {JobsService} from '../services/jobs/jobs.service';
import {NewJob} from '../models';

@Component({
  selector: 'app-scoreboard',
  templateUrl: 'scoreboard.page.html',
  styleUrls: ['scoreboard.page.scss']
})
export class ScoreboardPage {

  jobs: NewJob[] = [];

  constructor(public modalController: ModalController,
              private jobsService: JobsService) {
    this.jobsService.getAll().subscribe((jobs: NewJob[]) => this.jobs = jobs);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewJobModalComponent
    });
    return await modal.present();
  }


}
