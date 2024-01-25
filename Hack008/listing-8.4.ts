import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

export class MeineKomponente implements OnInit, OnDestroy {
  private meineSub: Subscription;

  ngOnInit() {
    this.meineSub = meineDaten$.subscribe((daten) => {
      // mache etwas mit den Daten
    });
  }

  ngOnDestroy() {
    this.meineSub.unsubscribe();
  }
}
