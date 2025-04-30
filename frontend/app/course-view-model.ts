import { Observable } from '@nativescript/core';

interface Assignment {
    name: string;
    grade: number;
    is_completed: boolean;
}

interface Course {
    course_id: string;
    title: string;
    section: string;
    description: string;
    studentsEnrolled: number;
    assignments: Assignment[];
    isExpanded?: boolean;
    average?: string;
    completedAssignments?: Assignment[];
    todoAssignments?: Assignment[];
}

export class CourseViewModel extends Observable {
    public courses: Course[] = [];

    constructor() {
        super();
        this.loadCourses();
    }

    private loadCourses() {
        const rawCourses: Course[] = [
            { course_id: '0', title: 'ENG 110', section: '1', description: 'College Composition I', studentsEnrolled: 25, assignments: [{ name: 'Homework 1', grade: 69, is_completed: true }, { name: 'Homework 2', grade: 86, is_completed: true }] },
            { course_id: '1', title: 'MTH 103', section: '3', description: 'Intermediate Algebra', studentsEnrolled: 30, assignments: [{ name: 'Homework 1', grade: 95, is_completed: true }, { name: 'Homework 2', grade: 70, is_completed: true }] },
            { course_id: '2', title: 'PHIL 101', section: '11', description: 'Philosophy of Ethics', studentsEnrolled: 18, assignments: [{ name: 'Homework 1', grade: 0, is_completed: false }, { name: 'Homework 2', grade: 95, is_completed: true }] },
            { course_id: '3', title: 'SOC 121', section: '5', description: 'Introduction to Research Methods', studentsEnrolled: 22, assignments: [{ name: 'Homework 1', grade: 76, is_completed: true }, { name: 'Homework 2', grade: 0, is_completed: false }] },
            { course_id: '4', title: 'CIS 125', section: '7', description: 'Principles of Programming I', studentsEnrolled: 20, assignments: [{ name: 'Homework 1', grade: 0, is_completed: false }, { name: 'Homework 2', grade: 0, is_completed: false }] },
            { course_id: '5', title: 'COLL 101', section: '2', description: 'College Seminar', studentsEnrolled: 30, assignments: [{ name: 'Homework 1', grade: 74, is_completed: true }, { name: 'Homework 2', grade: 70, is_completed: true }] }
        ];

        let updatedCourses = [];

        for (let i = 0; i < rawCourses.length; i++) {
            let course = rawCourses[i];
            let completed = [];
            let todo = [];
            let total = 0;
            let count = 0;
        
            for (let j = 0; j < course.assignments.length; j++) {
                let assignment = course.assignments[j];
                if (assignment.is_completed) {
                    completed.push(assignment);
                    total += assignment.grade;
                    count++;
                } else {
                    todo.push(assignment);
                }
            }
        
            let average = count > 0 ? (total / count).toFixed(1) : "N/A";
        
            course.isExpanded = false;
            course.completedAssignments = completed;
            course.todoAssignments = todo;
            course.average = average;
        
            updatedCourses.push(course);
        }
        
        this.courses = updatedCourses;
        
    }
}
