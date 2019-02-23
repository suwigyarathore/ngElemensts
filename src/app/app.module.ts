import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { GreetComponent } from "./greet/greet.component";

@NgModule({
  declarations: [GreetComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GreetComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreetComponent, { injector });
    customElements.define("app-greet", el);
  }

  ngDoBootstrap() {}
}
