import {Component, Input, OnInit} from '@angular/core';
import {Categories, Category, NewJob} from '../../models';
import {JobsService} from '../../services/jobs';
import {JobDetailsComponent} from '../job-details/job-details.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {

  @Input() id: string;

  job: NewJob;
  categories: Category [] = Categories;
  selectedCategory: Category;
  newJob = false;


  constructor( private jobService: JobsService, public modalController: ModalController) {}


  ngOnInit() {
    this.jobService.getJobById(this.id).subscribe((job: NewJob) => {
      this.job = job;
      this.selectedCategory = this.categories.find(item => item.value === job.category);
      this.newJob = ('status' in job) ? false : true;
    });
  }

  async openDetailsModal(id) {
    const modal = await this.modalController.create({
      component: JobDetailsComponent,
      cssClass: 'details-modal',
      componentProps: {id}
    });
    return await modal.present();
  }

  help() {
    this.jobService.updateStatus(this.id)
    event.stopPropagation();
  }
}
