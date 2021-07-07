import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
}

@Component({
  selector: "mon-component",
  template: "<div><h2>Mon premier Component</h2></div>",
  styleUrls: ["./app.component.css"]
})
export class MonComponent {}
