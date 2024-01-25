import { of, combineLatest } from "rxjs";

let observable1$ = of(1);
let observable2$ = of(2);

combineLatest([observable1$, observable2$]).subscribe(
  ([wert1, wert2]) => console.log(wert1, wert2) // Loggt 1, 2
);
