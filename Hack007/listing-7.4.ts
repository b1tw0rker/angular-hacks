import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "./data.service";

@Component({
  selector: "app-data-component",
  template: `<div *ngIf="data">{{ data }}</div>`,
})
export class DataComponent implements OnDestroy {
  data: Data | null = null;
  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.fetchData().subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
