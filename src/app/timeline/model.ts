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
        return moment(this.start).format('HH:mm');
    }

    public getEndTime() {
        return moment(this.end).format('HH:mm');
    }

    public getStartOffset() {
        const dayMins = 24 * 60; // 1440 Min.
        const mins = (moment(this.start).hours() * 60) + (moment(this.start).minutes());

        return mins * 100 / dayMins; // %offset
    }

    public getEndOffset() {
        const dayMins = 24 * 60; // 1440 Min.
        const mins = (moment(this.end).hours() * 60) + (moment(this.end).minutes());

        return mins * 100 / dayMins; // %offset
    }
}

export const SHIFT_FIXTURES: Shift[] = [
    new Shift(moment('2020-07-24T08:01:30').toDate(), moment('2020-07-24T12:12:30').toDate()),
    new Shift(moment('2020-07-24T12:31:30').toDate(), moment('2020-07-24T14:12:30').toDate()),
    new Shift(moment('2020-07-24T15:55:30').toDate(), moment('2020-07-24T18:00:10').toDate()),
    new Shift(moment('2020-07-24T18:20:30').toDate(), moment('2020-07-24T20:12:30').toDate()),
    new Shift(moment('2020-07-24T22:00:00').toDate(), moment('2020-07-24T23:59:50').toDate())
];
