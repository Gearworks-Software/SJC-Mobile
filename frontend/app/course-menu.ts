import { EventData, Page, ObservableArray } from '@nativescript/core';
import { CourseViewModel } from './course-view-model';

let viewModel: CourseViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CourseViewModel();
    page.bindingContext = viewModel;
}

export function onCourseTap(args) {
    const index = args.index;
    const tappedCourse = viewModel.courses[index];
    tappedCourse.isExpanded = !tappedCourse.isExpanded;
    viewModel.notifyPropertyChange("courses", viewModel.courses);
}
