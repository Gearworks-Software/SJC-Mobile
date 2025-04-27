import { EventData, Observable } from '@nativescript/core';

export class Counseling extends Observable {
    public counselingSessions: Array<any> = [];
    public showBookingForm: boolean = false;
    public sessionDate: Date;
    public sessionTime: string;

    constructor() {
        super();
        this.loadCounselingSessions();
    }

    private loadCounselingSessions() {
        this.counselingSessions = [
            { date: '2025-04-10', time: '10:00 AM', details: 'Session with Dr. Smith' },
            { date: '2025-04-12', time: '2:00 PM', details: 'Session with Dr. Johnson' },
            { date: '2025-04-15', time: '9:00 AM', details: 'Session with Dr. Davis' },
            // Add more sessions maybe
        ];
    }

    public onViewDetails(session: any) {
        console.log(`Viewing details for session: ${session.details}`);
    }

    public onNewSessionTap() {
        this.showBookingForm = true;
    }

    public onBookSession() {
        if (this.sessionDate && this.sessionTime) {
            console.log(`Session booked for ${this.sessionDate.toDateString()} at ${this.sessionTime}`);
            this.showBookingForm = false;
            this.loadCounselingSessions(); 
        }
    }

    public onCancelBooking() {
        this.showBookingForm = false;
    }
}

