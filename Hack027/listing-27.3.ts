import { DemoModul } from "path/to/my-module";

@NgModule({
  imports: [
    // ...
    DemoModul.forRoot(),
  ],
  // ...
})
export class AppModule {}
