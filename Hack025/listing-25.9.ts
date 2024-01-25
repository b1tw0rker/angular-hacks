@Component({...})
export class EffectiveCounterCmp {
readonly count = signal(0);
constructor() {
// Einen neuen Effekt registrieren.
effect(() => {
 console.log(Der Zählerstand ist: ${this.count()}));
 });
 }
}
