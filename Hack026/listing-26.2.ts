import { Component, OnInit } from "@angular/core";
import { IpService } from "./ip.service";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.component.html",
})
export class MyComponent implements OnInit {
  hideContent = false;

  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.ipService.getIpAddress().subscribe((data) => {
      if (data.ip === "80.146.191.144") {
        this.hideContent = true;
      }
    });
  }
}
