import {Component, Input, OnInit} from '@angular/core';
import {JobsService} from '../../services/jobs';
import {Categories, Category, Job} from '../../models';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  @Input() id: string;
  @Input() jobUid: string;


  job: Job;
  categories: Category [] = Categories;
  selectedCategory: Category;


  constructor( private jobService: JobsService) {}


  ngOnInit() {
    this.jobService.getJobById(this.jobUid, this.id).subscribe((job: Job []) => {
      this.job = job[0];
      this.selectedCategory = this.categories.find(item => item.value === this.job.category);
    });
  }

}
