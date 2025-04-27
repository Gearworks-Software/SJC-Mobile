import { EventData, Observable } from '@nativescript/core';

export class EventCalendar extends Observable {
    public calendarItems: Array<any> = [];

    constructor() {
        super();
        this.initializeCalendar();
    }

    private initializeCalendar() {
        this.calendarItems = [
            { date: '2025-04-01' },
            { date: '2025-04-02' },
            { date: '2025-04-03' },
        ];
    }

    onDateTap(args: EventData) {
        const selectedDate = args.object.text;
        console.log(`Date selected: ${selectedDate}`);
    }
}

