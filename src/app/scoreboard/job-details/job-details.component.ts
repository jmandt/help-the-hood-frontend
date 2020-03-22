import {Component, Input, OnInit} from '@angular/core';
import {JobsService} from '../../services/jobs';
import {Categories, Category, Job} from '../../models';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  @Input() id: string;
  @Input() jobUid: string;
  @Input() currentUserId: string;

  job: Job;
  categories: Category [] = Categories;
  selectedCategory: Category;


  constructor( private jobService: JobsService, private router: Router, private modalCtrl: ModalController ) {}


  ngOnInit() {
    this.jobService.getJobById(this.jobUid, this.id).subscribe((job: Job []) => {
      this.job = job[0];
      this.selectedCategory = this.categories.find(item => item.value === this.job.category);
    });
  }

  help() {
    if (this.currentUserId) {
      this.jobService.commitToJob(this.job.uid, this.id, this.job);
    } else {
      this.router.navigateByUrl('/auth/login');
    }
    this.modalCtrl.dismiss();
  }

}
