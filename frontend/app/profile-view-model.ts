import { Observable } from "@nativescript/core";

export class ProfileViewModel extends Observable {
    private _user: any;

    constructor() {
        super();
        this._user = {
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

    get user() {
        return this._user;
    }

    set user(value: any) {
        this._user = value;
        this.notifyPropertyChange("user", value);
    }

    get preferences() {
        return this._user.preferences;
    }

}
