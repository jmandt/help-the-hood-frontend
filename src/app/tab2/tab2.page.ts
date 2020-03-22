import {Component, OnInit} from '@angular/core';
import {JobsService} from '../services/jobs';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    jobsTaken;
    jobsPosted;

    constructor(private jobService: JobsService) {
    }

    ngOnInit() {
        this.jobService.getAllCommittedJobsByUser().subscribe(jobs => {
            this.jobsTaken = jobs;
        });

        this.jobService.getAllPostedJobsByUser().subscribe(jobs => {
            this.jobsPosted = jobs;
        });
    }

}
