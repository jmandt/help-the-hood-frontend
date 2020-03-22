import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Location, User} from '../models';
import {UserService} from '../services/users/user.service';
import {Select} from '@ngxs/store';
import {UserState} from '../store/state';
import {Observable} from 'rxjs';
import {CoreService} from '../services/core';
import {AuthService} from '../services/auth';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage {

    // @ts-ignore
    @Select(UserState) user$: Observable<User>;

    userProfile: User;
    shownlocation: string | undefined;
    location: Location;
    name: string | undefined;

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private coreService: CoreService,
                private authService: AuthService) {
        this.user$.subscribe(user => {
            if (user.uid !== undefined) {
                this.userProfile = user;
                this.location = user.location;
                this.shownlocation = `${user.location.postalCode} ${user.location.city}`;
                this.name = user.name;
            }
        });
    }

    updateProfile() {
        console.log({name: this.name, location: this.location});
        this.userService.update({name: this.name, location: this.location});
        this.coreService.showToast('Änderungen wurden gespeichert', 'green');
    }

    onPlaceSelect(e) {
        this.location = {address: e.name, coordinates: e.latlng, city: e.city, postalCode: e.postcode};
        this.shownlocation = `${e.postcode} ${e.city}`;
    }

    doLogout() {
        this.authService.doLogout();
    }
}

