import { Page } from "@nativescript/core";
import { ProfileViewModel } from "./profile-view-model";

export function onNavigatingTo(args) {
    const page = args.object as Page;
    const profileViewModel = new ProfileViewModel();
    page.bindingContext = profileViewModel;
}
