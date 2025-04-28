import { Observable } from '@nativescript/core';

export class ProfileViewModel extends Observable {
    private _user: any;

    constructor() {
        super();
        this._user = {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+123456789",
            courses: [
                { courseName: "Intro to Programming" },
                { courseName: "Data Structures" }
            ],
            preferences: {
                language: "English",
                notifications: true
            }
        };
    }

    get user() {
        return this._user;
    }

    onEditProfile() {
        // Logic to edit profile
        alert("Edit profile functionality coming soon!");
    }
}
