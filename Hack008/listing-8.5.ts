import { throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

let fehlerhaftesObservable$ = throwError("Ein Fehler ist aufgetreten");

fehlerhaftesObservable$
  .pipe(
    catchError((fehler) => {
      console.error(fehler);
      return of(null);
    })
  )
  .subscribe();
