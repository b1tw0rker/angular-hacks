import { Component } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  template: ` <fa-icon [icon]="faCoffee"></fa-icon> `,
})
export class AppComponent {
  faCoffee = faCoffee;
}
