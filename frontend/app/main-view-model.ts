import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MainViewModel();
}

export class MainViewModel extends Observable {
    constructor() {
        super();
    }

    onLoginTap() {
        console.log("Login button tapped");
        //TODO - Validation Logic
        alert("Login attempt made.");
    }
}
