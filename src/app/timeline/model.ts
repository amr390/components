import * as moment from 'moment';


export class Shift {
    public start: Date;
    public end: Date;

    constructor(start: Date, end?: Date) {
        this.start = start;
        this.end = end;
    }


    public isOpen() {
        return !!this.end;
    }

    public getStartTime() {
        return moment(this.start).format('hh:mm');
    }

    public getEndTime() {
        return moment(this.end).format('hh:mm');
    }

}

export const SHIFT_FIXTURES: Shift[] = [
    new Shift(moment('2020-07-24T08:01:30').toDate(), moment('2020-07-24T10:12:30').toDate()),
    new Shift(moment('2020-07-24T10:31:30').toDate(), moment('2020-07-24T14:12:30').toDate()),
    new Shift(moment('2020-07-24T15:55:30').toDate(), moment('2020-07-24T18:00:10').toDate()),
    new Shift(moment('2020-07-24T18:20:30').toDate(), moment('2020-07-24T20:12:30').toDate())
];
