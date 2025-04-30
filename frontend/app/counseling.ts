import { EventData, Page } from '@nativescript/core';
import { CounselingViewModel } from './counseling-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new CounselingViewModel();  
}

export function onViewDetails(args: EventData) {
    const sessionId = (<any>args.object).sessionId;
    const page = (<any>args.object).page;
    const viewModel = <CounselingViewModel>page.bindingContext;
    console.log(`Viewing details for session: ${sessionId} ${viewModel.counselingSessions[sessionId].details}`);
}

export function onNewSessionTap() {
    const page = <Page>args.object.page;
    const viewModel = <CounselingViewModel>page.bindingContext;
    viewModel.showBookingForm = true;
}

export function onBookSession(args: EventData) {
    const button = args.object;
    const sessionId = button.sessionId;
    const page = button.page;
    const viewModel = <CounselingViewModel>page.bindingContext;

    const session = viewModel.counselingSessions.find(s => s.session_id === sessionId);

    if (session && session.available) {
        session.available = false;  
        viewModel.notifyPropertyChange("counselingSessions", viewModel.counselingSessions); 
        console.log("Session booked:", sessionId);
    }
}

export function onCancelBooking() {
    const page = <Page>args.object.page;
    const viewModel = <CounselingViewModel>page.bindingContext;
    viewModel.showBookingForm = false; 
}
