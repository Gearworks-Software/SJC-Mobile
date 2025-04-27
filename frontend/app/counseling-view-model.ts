import { Observable } from '@nativescript/core';

export class CounselingViewModel extends Observable {
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
}
