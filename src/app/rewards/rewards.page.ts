import { Component } from '@angular/core';
import {AuthService} from '../services/auth';

@Component({
  selector: 'app-rewards',
  templateUrl: 'rewards.page.html',
  styleUrls: ['rewards.page.scss']
})
export class RewardsPage {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
}
