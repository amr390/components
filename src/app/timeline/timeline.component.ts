import { Component, OnInit } from '@angular/core';
import { Shift, SHIFT_FIXTURES } from './model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

  shifts: Shift[];

  constructor() { }

  ngOnInit() {
    this.shifts = SHIFT_FIXTURES;
    this.shifts.forEach( shift => console.log(shift.getStartOffset()));
  }

}
