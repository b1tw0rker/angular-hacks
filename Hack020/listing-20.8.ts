import { Component } from "@angular/core";
import { CreateUserGQL } from "./create-user.mutation";

@Component({
  selector: "app-root",
  template: ` <button (click)="createUser()">User erstellen</button> `,
})
export class AppComponent {
  constructor(private createUserGQL: CreateUserGQL) {}

  createUser() {
    this.createUserGQL
      .mutate({ name: "Max", email: "max@example.com" })
      .subscribe();
  }
}
