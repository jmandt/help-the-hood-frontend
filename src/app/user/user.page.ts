import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../models';
import {UserService} from '../services/users/user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

    userUpdateForm;
    // @ts-ignore
    userProfile: User = {
        uid: 'k7m3tTtRalfzuGdC25n2c5ZLbFE3',
        dateCreated: new Date().getUTCDate(),
        email: 'jmandt.fnt@gmail.com',
        emailVerified: false,
        lastLogin: new Date().getUTCDate(),
        name: 'JOnathan Mandt',
        profileImageUrl: ''
    };

    constructor(private fb: FormBuilder, private userService: UserService) {
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
