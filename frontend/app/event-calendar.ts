import { Observable } from '@nativescript/core';

export class EventCalendar extends Observable {
    public events: Array<any> = [];

    constructor() {
        super();
        this.initializeEvents();
    }

    private initializeEvents() {
        this.events = [
            { date: '2025-04-01', event: 'Birthday Party at John\'s House' },
            { date: '2025-04-02', event: 'Meeting with Sarah at Cafe Downtown' },
            { date: '2025-04-03', event: 'Yoga Class at the Gym' },
            { date: '2025-04-04', event: 'Work Conference at Convention Center' },
            { date: '2025-04-05', event: 'Concert: The Beatles Tribute at Park Arena' },
            { date: '2025-04-06', event: 'Sunday Brunch at The Diner' },
            { date: '2025-04-07', event: 'Art Exhibition at Modern Art Gallery' },
            { date: '2025-04-08', event: 'Movie Night at Cinema Plaza' },
            { date: '2025-04-09', event: 'Team Building at Adventure Park' },
            { date: '2025-04-10', event: 'Charity Fundraiser at Grand Hall' },
            { date: '2025-04-11', event: 'Cooking Class at Culinary Institute' },
            { date: '2025-04-12', event: 'Family Picnic at Riverside Park' },
            { date: '2025-04-13', event: 'Book Signing at Downtown Bookstore' },
            { date: '2025-04-14', event: 'Jazz Concert at Riverside Theater' },
            { date: '2025-04-15', event: 'Outdoor Hiking at Green Mountain Trails' }
        ];
    }
}
