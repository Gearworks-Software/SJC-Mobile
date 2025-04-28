import { EventData, Page } from '@nativescript/core';
import { CounselingViewModel } from './counseling-view-model';

let viewModel: CounselingViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CounselingViewModel();
    page.bindingContext = viewModel;
}

export function onViewDetails(args: EventData) {
    const sessionId = (<any>args.object).sessionId;
    console.log(`Viewing details for session: ${sessionId} ${ viewModel.counselingSessions[sessionId].details }`);
}

export function onNewSessionTap() {
    viewModel.showBookingForm = true;
}

export function onBookSession() {
    if (viewModel.sessionDate && viewModel.sessionTime) {
        console.log(`Session booked for ${viewModel.sessionDate.toDateString()} at ${viewModel.sessionTime}`);
        viewModel.showBookingForm = false;
        viewModel['loadCounselingSessions'](); // Call private method
    }
}

export function onCancelBooking() {
    viewModel.showBookingForm = false;
}

