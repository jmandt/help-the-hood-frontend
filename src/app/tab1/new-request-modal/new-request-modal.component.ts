import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RequestsService} from '../../services/requests.service';

@Component({
  selector: 'app-new-request-modal',
  templateUrl: './new-request-modal.component.html',
  styleUrls: ['./new-request-modal.component.scss'],
})
export class NewRequestModalComponent implements OnInit {

  showErrorMessage = false;
  newRequestForm: FormGroup;
  selectedCategory: string;


  constructor(private fb: FormBuilder,
              private requestsService: RequestsService
  ) {
    this.newRequestForm = this.fb.group({
      name: ['',  Validators.compose([Validators.minLength(5), Validators.required])],
      category: [''],
      description: [''],
      dueDate: [],
      coordinates: [],
    });
  }

  ngOnInit() {}

  onPlaceSelect(e) {
    this.newRequestForm.value.coordinates = e.latlng;
    this.showErrorMessage = false;
  }

  publishRequest() {
    console.log(this.newRequestForm.value)
    this.requestsService.store();
  }
}
