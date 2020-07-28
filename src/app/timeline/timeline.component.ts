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

  calculateOffset(shift: Shift, idx: number) {
    let i = 0;
    let offset = 0;
    while (i < idx) {
      const item = this.shifts[i];
      offset += (item.getEndOffset() - item.getStartOffset());
      i++;
    }
    console.log('general offset: ', offset, 'shift offset: ', shift.getStartOffset());
    return shift.getStartOffset() - offset;
  }

}
