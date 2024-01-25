@Component({...})
export class EffectiveCounterCmp {
 readonly count = signal(0);

 private loggingEffect = effect(() => {
 console.log(Der Zählerstand ist: ${this.count()}));
 });
}
