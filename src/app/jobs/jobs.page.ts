import {Component, OnInit} from '@angular/core';
import {JobsService} from '../services/jobs';
import {Select} from '@ngxs/store';
import {UserState} from '../store/state';
import {Observable} from 'rxjs';
import {User} from '../models';

@Component({
    selector: 'app-jobs',
    templateUrl: 'jobs.page.html',
    styleUrls: ['jobs.page.scss']
})
export class JobsPage {

    jobsTaken = [];
    jobsPosted = [];
    jobsDoneByMe = [];
    jobsDoneForMe  = [];
    selectedSegment = 'helping';

    @Select(UserState) user$: Observable<User>;

    constructor(private jobService: JobsService) {
        this.user$.subscribe(user => user.uid ? this.init() : undefined);
    }

    init() {
        this.jobService.getAllCommittedJobsByUser().subscribe(jobs => {
          console.log(jobs);
            this.jobsTaken = jobs.filter(job => job.status === 'committed' || job.status === 'inProgress');
            this.jobsDoneByMe = jobs.filter(job => job.status === 'done');
        });

        this.jobService.getAllPostedJobsByUser().subscribe(jobs => {
            this.jobsPosted = jobs.filter(job => job.status !== 'done');
            this.jobsDoneForMe = jobs.filter(job => job.status === 'done');
        });
    }

    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }

}
