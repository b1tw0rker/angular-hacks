import { throwError, of } from "rxjs";
import { retry, catchError } from "rxjs/operators";

let fehlerhaftesObservable$ = throwError("Ein Fehler ist aufgetreten");

fehlerhaftesObservable$
  .pipe(
    retry(3), // versucht, das Observable bis zu 3 Mal neu zu abonnieren
    catchError((fehler) => {
      console.error(fehler);
      return of(null);
    })
  )
  .subscribe();
