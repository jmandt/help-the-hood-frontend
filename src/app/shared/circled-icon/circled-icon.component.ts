import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circled-icon',
  templateUrl: './circled-icon.component.html',
  styleUrls: ['./circled-icon.component.scss'],
})
export class CircledIconComponent implements OnInit {

  @Input() name;
  @Input() inputClass;

  constructor() { }

  ngOnInit() {}

}
