import { Observable } from '@nativescript/core';
import { Course } from './course';

export class CourseViewModel extends Observable {
    public courses: Array<Course> = [];

    constructor() {
        super();
        this.loadCourses();
    }

    private loadCourses() {
        this.courses = [
            { id: '1', title: 'Math 103', description: 'Intermediate Algebra', imageUrl: 'img/math.jpg', studentsEnrolled: 30 },
            { id: '2', title: 'English 110', description: 'College Composition 1', imageUrl: 'img/english.jpg', studentsEnrolled: 25 },
            // Add more courses 
        ];
    }

    public joinCourse(courseId: string) {
        console.log(`Joined course with ID: ${courseId}`);
        // Add course joining logic
    }
}