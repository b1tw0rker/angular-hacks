import { of } from "rxjs";
import { switchMap } from "rxjs/operators";

let quellObservable$ = of(1, 2, 3);

let zielObservable$ = quellObservable$.pipe(switchMap((wert) => of(wert * 2)));

zielObservable$.subscribe((wert) => console.log(wert)); // Loggt 2, 4, 6
