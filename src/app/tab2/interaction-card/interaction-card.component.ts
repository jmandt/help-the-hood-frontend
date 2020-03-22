import {Component, Input, OnInit} from '@angular/core';
import {Categories, Category} from '../../models';
import {JobsService} from '../../services/jobs';

@Component({
    selector: 'app-interaction-card',
    templateUrl: './interaction-card.component.html',
    styleUrls: ['./interaction-card.component.scss'],
})
export class InteractionCardComponent implements OnInit {

    @Input() jobTaken;
    @Input() action;
    categories: Category [] = Categories;
    selectedCategory: Category;

    constructor(private jobService: JobsService) {
    }

    ngOnInit() {
        this.selectedCategory = this.categories.find(item => item.value === this.jobTaken.category);
    }

    acceptHelp() {
        this.jobService.acceptHelp(this.jobTaken.id, this.jobTaken.committedBy.uid, this.jobTaken.takenId);
    }

    denyHelp() {
        this.jobService.denyHelp(this.jobTaken.id);
    }

    markAsDone() {
        this.jobService.markAsDone(this.jobTaken.id, this.jobTaken.committedBy.uid, this.jobTaken.takenId);
    }
}
