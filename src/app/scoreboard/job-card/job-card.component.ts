import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import * as moment from 'moment';

import {Categories, Category, Job, User} from 'src/app/models';
import {JobsService} from 'src/app/services/jobs';
import {JobDetailsComponent} from '../job-details/job-details.component';
import {Select} from '@ngxs/store';
import {UserState} from '../../store/state';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Component({
    selector: 'app-job-card',
    templateUrl: './job-card.component.html',
    styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {

    @Input() id: string;
    @Input() jobUid: string;

    @Select(UserState) user$: Observable<User>;

    job: Job;
    categories: Category [] = Categories;
    selectedCategory: Category;
    newJob = false;
    user: User;

    constructor(private jobService: JobsService,
                public modalController: ModalController,
                private router: Router,
                public alertController: AlertController) {
        this.user$.subscribe(user => this.user = user);
    }


    ngOnInit() {
        this.jobService.getJobById(this.jobUid, this.id).subscribe((job: Job []) => {
            this.job = job[0];
            this.selectedCategory = this.categories.find(item => item.value === this.job.category);
            this.newJob = (this.job.status !== 'new') ? false : true;
        });
    }

    async openDetailsModal(id) {
        const modal = await this.modalController.create({
            component: JobDetailsComponent,
            cssClass: 'details-modal',
            componentProps: {id: this.id, jobUid: this.jobUid, currentUserId: this.user.uid}
        });
        return await modal.present();
    }

    help() {
        event.stopPropagation();
        if (this.user) {
            this.presentHelpConfirmationAlert();
        } else {
            this.router.navigateByUrl('/auth/login');
        }

    }

    async presentHelpConfirmationAlert() {
        const alert = await this.alertController.create({
            header: `Beim ${this.selectedCategory.displayName} helfen?`,
            message: 'Bitte bestätige, dass du hier unterstützen kannst',
            buttons: [{
                text: 'Abbrechen',
                role: 'cancel',
                cssClass: 'secondary',
            }, {
                text: 'Ja, helfen!',
                handler: () => {
                    this.jobService.commitToJob(this.job.uid, this.id, this.job);
                }
            }]
        });

        await alert.present();
    }

    printDate() {
        const startDate = moment(this.job.startDate.toDate());
        const today = moment();
        const tomorrow = moment().add(1, 'day');
        return today.isSame(startDate, 'days')
            ? 'Heute'
            : tomorrow.isSame(startDate, 'days')
                ? 'Morgen'
                : `In ${startDate.diff(today, 'days')} Tagen`;
    }

    printTime() {
        const startDate = moment(this.job.startDate.toDate());
        const endDate = this.job.endDate
            ? moment(this.job.endDate.toDate())
            : undefined;

        return `${startDate.format('hh:mm')}${endDate ? `-${endDate.format('hh:mm')}` : ''}`;
    }
}
