import { EventData, Page } from '@nativescript/core';
import { CafeteriaMenuViewModel } from './cafeteria-menu-view-model';

let viewModel: CafeteriaMenuViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CafeteriaMenuViewModel();
    page.bindingContext = viewModel;
}
