import { Component, Input } from '@angular/core';

import { Reward } from 'src/app/models';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss']
})
export class RewardCardComponent {

  @Input() reward: Reward;

}