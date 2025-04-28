import { Observable, ObservableArray } from '@nativescript/core';

interface Course {
    course_id: string;
    title: string;
    description: string;
    // imageUrl: string;
    studentsEnrolled: number;
}

export class CourseViewModel extends Observable {
    // public courses: ObservableArray<Course>;
    public courses = new ObservableArray<Course>([
        { course_id: '0', title: 'ENG 110', description: 'College Composition I', studentsEnrolled: 25 },
        { course_id: '1', title: 'MTH 103', description: 'Intermediate Algebra', studentsEnrolled: 30 },
        { course_id: '2', title: 'PHIL 101', description: 'Philosophy of Ethics', studentsEnrolled: 18 },
        { course_id: '3', title: 'SOC 121', description: 'Introduction to Research Methods', studentsEnrolled: 22 },
        { course_id: '4', title: 'CIS 125', description: 'Principles of Programming I', studentsEnrolled: 20 },
        { course_id: '5', title: 'COLL 101', description: 'College Seminar', studentsEnrolled: 30 }
    ]);

    constructor() {
        super();
        // this.loadCourses();
    }

    // private loadCourses() {
    //     this.courses = new ObservableArray<Course>([
    //         { course_id: '0', title: 'ENG 110', description: 'College Composition I', studentsEnrolled: 25 },
    //         { course_id: '1', title: 'MTH 103', description: 'Intermediate Algebra', studentsEnrolled: 30 },
    //         { course_id: '2', title: 'PHIL 101', description: 'Philosophy of Ethics', studentsEnrolled: 18 },
    //         { course_id: '3', title: 'SOC 121', description: 'Introduction to Research Methods', studentsEnrolled: 22 },
    //         { course_id: '4', title: 'CIS 125', description: 'Principles of Programming I', studentsEnrolled: 20 },
    //         { course_id: '5', title: 'COLL 101', description: 'College Seminar', studentsEnrolled: 30 }
    //     ]);
    //     this.notifyPropertyChange("courses", this.courses)
    // }
}