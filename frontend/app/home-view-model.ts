import { Observable } from "@nativescript/core";
import { Frame } from '@nativescript/core';
import { EventData } from '@nativescript/core';

export class HomeViewModel extends observable{

  constructor() {
    super();
  }

public onCounselingTap(args: EventData) {
        const frame = Frame.topmost();
        frame.navigate("counseling");
    }
}

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

