import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../models';
import {UserService} from '../services/users/user.service';
import {State} from '@ngxs/store';
import {UserState} from '../store/state';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

    // @ts-ignore
    @State(UserState) user$: Observable<User>;

    userUpdateForm;
    // @ts-ignore
    userProfile: User;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.user$.subscribe(user => this.userProfile = user);
    }

    ngOnInit() {
        this.userUpdateForm = this.fb.group({
            name: [this.userProfile ? this.userProfile.name : undefined],
            postalCode: [this.userProfile ? this.userProfile.postalCode : undefined],
        });
    }

    updateProfile() {
        this.userService.update(this.userUpdateForm.value);
    }
}
