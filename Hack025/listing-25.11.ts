@Component({...})
export class EffectiveCounterCmp {
readonly count = signal(0);
constructor(private injector: Injector) {}

initializeLogging(): void {
effect(() => {
console.log(Der Zählerstand ist: ${this.count()}));
}, {injector: this.injector});
}
}
