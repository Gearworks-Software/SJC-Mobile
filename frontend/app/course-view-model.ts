import { Observable } from '@nativescript/core';

interface Course {
    course_id: string;
    title: string;
    section: string;
    description: string;
    studentsEnrolled: number;
    assignments: Array<Assignment>;
}

interface Assignment{
    name: string;
    grade: number;
    is_completed: boolean;
}

export class CourseViewModel extends Observable {
    public courses: Array<Course> = [];

    constructor() {
        super();
        this.loadCourses();
    }

    private loadCourses() {
        this.courses = [
            { course_id: '0', title: 'ENG 110', section: '1', description: 'College Composition I', studentsEnrolled: 25, assignments: [{name:'Homework 1', grade: 69, is_completed: true}, {name:'Homework 2', grade: 86, is_completed: true}]},
            { course_id: '1', title: 'MTH 103', section: '3', description: 'Intermediate Algebra', studentsEnrolled: 30, assignments: [{name:'Homework 1', grade: 95, is_completed: true}, {name:'Homework 2', grade: 70, is_completed: true}]},
            { course_id: '2', title: 'PHIL 101', section: '11', description: 'Philosophy of Ethics', studentsEnrolled:18, assignments: [{name:'Homework 1', grade: 0, is_completed: false}, {name:'Homework 2', grade: 95, is_completed: true}]},
            { course_id: '3', title: 'SOC 121', section: '5', description: 'Introduction to Research Methods', studentsEnrolled: 22, assignments: [{name:'Homework 1', grade: 76, is_completed: true}, {name:'Homework 2', grade: 0, is_completed: false}]},
            { course_id: '4', title: 'CIS 125', section: '7', description: 'Principles of Programming I', studentsEnrolled: 20, assignments: [{name:'Homework 1', grade: 0, is_completed: false}, {name:'Homework 2', grade: 0, is_completed: false}]},
            { course_id: '5', title: 'COLL 101', section: '2', description: 'College Seminar', studentsEnrolled: 30, assignments: [{name:'Homework 1', grade: 74, is_completed: true}, {name:'Homework 2', grade: 70, is_completed: true}]}
        ];
    }

    public calculateAverage(){
        let total: 0;
        let count: 0;

        for(const course of this.courses){
            for(const assignment of course.assignments){
                if(assignment.is_completed)
                {
                    total+= assignment.grade;
                    count++;
                }
            }
        }
        return total;
    }
}
