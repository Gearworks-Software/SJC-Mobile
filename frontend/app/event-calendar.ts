import { EventData, Page } from '@nativescript/core';
import { EventCalendarViewModel } from './event-calendar-view-model';

let viewModel: EventCalendarViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new EventCalendarViewModel();
    page.bindingContext = viewModel;
}
