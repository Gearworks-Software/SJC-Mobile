import { EventData, Page } from '@nativescript/core';
import { CourseViewModel } from './course-view-model';

let viewModel: CourseViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CourseViewModel();
    page.bindingContext = viewModel;
}

export function joinCourse(args) {
    const courseId = args.object.courseId;
    console.log(`Joined course with ID: ${courseId}`);
    // Add course joining logic
}