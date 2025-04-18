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