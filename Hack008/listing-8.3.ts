import { from } from "rxjs";
import { map } from "rxjs/operators";

let daten$ = from([1, 2, 3, 4]).pipe(map((n) => n * 2));

daten$.subscribe((x) => console.log(x)); // Loggt 2, 4, 6, 8
