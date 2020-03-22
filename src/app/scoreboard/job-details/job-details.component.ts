import {Component, Input, OnInit} from '@angular/core';
import {JobsService} from '../../services/jobs';
import {Categories, Category, Job} from '../../models';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';

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


    constructor(private jobService: JobsService,
                private router: Router,
                private modalCtrl: ModalController,
                private alertController: AlertController) {
    }


    ngOnInit() {
        this.jobService.getJobById(this.jobUid, this.id).subscribe((job: Job []) => {
            this.job = job[0];
            this.selectedCategory = this.categories.find(item => item.value === this.job.category);
        });
    }

    help() {
        if (this.currentUserId) {
            this.presentHelpConfirmationAlert();
        } else {
            this.router.navigateByUrl('/auth/login');
            this.modalCtrl.dismiss();
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
                    this.modalCtrl.dismiss();
                }
            }]
        });

        await alert.present();
    }

}
