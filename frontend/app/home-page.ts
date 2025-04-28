import { EventData, Page, Frame } from '@nativescript/core'
import { MainViewModel } from './main-view-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new MainViewModel()
}

export function onLoginTap(args: EventData) {
  const frame = Frame.topmost();
  frame.navigate("home-page");
}

export function onCounselingTap(args: EventData) {
    const frame = Frame.topmost();
    frame.navigate("counseling"); // Ensure the path matches the counseling page
}

export function onEventCalendarTap(args: EventData) {
    const frame = Frame.topmost();
    frame.navigate("event-calendar");
    console.log("event calendar");
  }

  export function onCoursesTap(args: EventData) {
    const frame = Frame.topmost();
    frame.navigate("course-menu"); 
}