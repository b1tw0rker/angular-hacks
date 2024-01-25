import { Observable, of } from "rxjs";

export class MeineKomponente {
  meineDaten$: Observable<string> = of("Hallo Welt");
}
