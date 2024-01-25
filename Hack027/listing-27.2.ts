@NgModule({
  // ...
})
export class DemoModul {
  static forRoot(): ModuleWithProviders<DemoModul> {
    return {
      ngModule: DemoModul,
      providers: [
        // Definition der Singleton-Dienste
        MySingletonService,
      ],
    };
  }
}
