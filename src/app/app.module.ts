import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent, MonComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, MonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, MonComponent]
})
export class AppModule {}
