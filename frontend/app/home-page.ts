import { EventData, Page, Frame } from '@nativescript/core'
import { MainViewModel } from './main-view-model'

export function navigatingTo(args: EventData) {
	const page = <Page>args.object
	page.bindingContext = new MainViewModel()
}

export function onCounselingTap(args: EventData) {
	const frame = Frame.topmost();
	frame.navigate("counseling");
}

export function onEventCalendarTap(args: EventData) {
	const frame = Frame.topmost();
	frame.navigate("event-calendar");
}

export function onCoursesTap(args: EventData) {
	const frame = Frame.topmost();
	frame.navigate("course-menu");
}

export function onProfileTap() {
	const frame = Frame.topmost();
	frame.navigate("profile");
}

export function onCafeteriaMenuTap() {
	const frame = Frame.topmost();
	frame.navigate("cafeteria-menu")
}