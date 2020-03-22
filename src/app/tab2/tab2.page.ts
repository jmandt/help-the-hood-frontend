import {Component, OnInit} from '@angular/core';
import {JobsService} from '../services/jobs';
import {Select} from '@ngxs/store';
import {UserState} from '../store/state';
import {Observable} from 'rxjs';
import {User} from '../models';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    jobsTaken;
    jobsPosted;
    jobsDoneByMe = [];
    jobsDoneForMe  = [];

    @Select(UserState) user$: Observable<User>;


    constructor(private jobService: JobsService) {
        this.user$.subscribe(user => user.uid ? this.init() : undefined);
    }

    init() {
        this.jobService.getAllCommittedJobsByUser().subscribe(jobs => {
            this.jobsTaken = jobs.filter(job => job.status === 'committed' || job.status === 'inProgress');
            this.jobsDoneByMe = jobs.filter(job => job.status === 'done');
        });

        this.jobService.getAllPostedJobsByUser().subscribe(jobs => {
            this.jobsPosted = jobs.filter(job => job.status !== 'done');
            this.jobsDoneForMe = jobs.filter(job => job.status === 'done');
        });
    }

}
