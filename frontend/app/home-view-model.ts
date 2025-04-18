import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

class HomeViewModel extends Observable {
    constructor() {
        super();
    }
}
