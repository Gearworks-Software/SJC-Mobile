import { EventData, Page } from '@nativescript/core';
import { CourseViewModel} from './course-view-model';

let viewModel: CourseViewModel;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new CourseViewModel();
    page.bindingContext = viewModel;
}

export function joinCourse(args) {
    const courseButton = args.object;
    const courseId = courseButton.courseId;

    const course = viewModel.courses.find(c => c.course_id === courseId);

    if (course) {
        if (!course.isEnrolled) {
            course.isEnrolled = true;
            course.studentsEnrolled += 1;
            viewModel.notifyPropertyChange('courses', viewModel.courses);
            console.log(`Joined course with ID: ${courseId}`);
        } else {
            console.log(`Already enrolled in course: ${courseId}`);
        }
    } else {
        console.error(`Course with ID: ${courseId} not found.`);
    }
}