import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobsService} from '../../services/jobs/jobs.service';
import {ModalController} from '@ionic/angular';
import {Categories, Category} from '../../models/jobs.models';

@Component({
  selector: 'app-new-job-modal',
  templateUrl: './new-job-modal.component.html',
  styleUrls: ['./new-job-modal.component.scss'],
})
export class NewJobModalComponent implements OnInit {

  showErrorMessage = false;
  newJobForm: FormGroup;
  categories: Category [] = Categories;


  constructor(private fb: FormBuilder,
              private jobsService: JobsService,
              private modalCtrl: ModalController
  ) {
    this.newJobForm = this.fb.group({
      name: ['',  Validators.compose([Validators.minLength(5), Validators.required])],
      category: [''],
      description: [''],
      dueDate: [],
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
    this.jobsService.store(this.newJobForm.value);
    this.modalCtrl.dismiss();
  }
}
