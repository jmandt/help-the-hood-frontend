import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import * as moment from 'moment';

import {JobsService} from '../../services/jobs/jobs.service';
import {Categories, Category} from '../../models';

@Component({
  selector: 'app-new-job-modal',
  templateUrl: './new-job-modal.component.html',
  styleUrls: ['./new-job-modal.component.scss'],
})
export class NewJobModalComponent implements OnInit {

  readonly now = moment().utcOffset(1).toISOString();
  showErrorMessage = false;
  newJobForm: FormGroup;
  categories: Category [] = Categories;

  constructor(private fb: FormBuilder,
              private jobsService: JobsService,
              private modalCtrl: ModalController
  ) {
    this.newJobForm = this.fb.group({
      category: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      startDate: [new Date().toDateString(), Validators.compose([Validators.required])],
      endDate: [new Date().toDateString(), Validators.compose([Validators.required])],
      coordinates: [],
    });
  }

  ngOnInit() {}

  onPlaceSelect(e) {
    this.newJobForm.value.coordinates = e.latlng;
    this.showErrorMessage = false;
  }

  publishJob() {
    console.log(this.newJobForm.value)

    this.jobsService.storeNewJob(this.newJobForm.value);
    this.modalCtrl.dismiss();
  }
}
