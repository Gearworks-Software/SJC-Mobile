import { Observable } from "@nativescript/core";

export class ProfileViewModel extends Observable {
    private user: any;

    constructor() {
        super();
        this.user = {
            username: "john_doe",
            password: "********",
            courses: [
                { courseName: "Introduction to NativeScript" },
                { courseName: "Advanced JavaScript" },
            ],
            preferences: {
                language: "English",
                notifications: true,
                theme: "Dark",
            },
        };
    }

    get userData() {
        return this.user;
    }

    set userData(value: any) {
        this.user = value;
        this.notifyPropertyChange("user", value);
    }
}
