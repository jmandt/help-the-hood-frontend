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
  @Input() jobUid: string;
   job: NewJob;
  categories: Category [] = Categories;
  selectedCategory: Category;
  newJob = false;


  constructor( private jobService: JobsService, public modalController: ModalController) {}


  ngOnInit() {
    this.jobService.getJobById(this.jobUid, this.id).subscribe((job: NewJob []) => {
      this.job = job[0];
      this.selectedCategory = this.categories.find(item => item.value === this.job.category);
      this.newJob = (job.status !== 'new') ? false : true;
    });
  }

  async openDetailsModal(id) {
    const modal = await this.modalController.create({
      component: JobDetailsComponent,
      cssClass: 'details-modal',
      componentProps: {id: this.id, jobUid: this.jobUid}
    });
    return await modal.present();
  }

  help() {
    this.jobService.updateStatus(this.job.uid, this.id)
    event.stopPropagation();
  }
}
