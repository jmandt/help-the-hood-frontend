import {Component, Input, OnInit} from '@angular/core';
import {JobsService} from '../../services/jobs';
import {Categories, Category, NewJob} from '../../models';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  @Input() id: string;

  job: NewJob;
  categories: Category [] = Categories;
  selectedCategory: Category;


  constructor( private jobService: JobsService) {}


  ngOnInit() {
    this.jobService.getJobById(this.id).subscribe((job: NewJob) => {
      this.job = job;
      this.selectedCategory = this.categories.find(item => item.value === job.category);
    });
  }

}
