import { NgModule } from '@angular/core';

const routes: Routes = [ /* deine Routen */ ];

  @NgModule({
   imports: [
       BrowserModule,
       FormsModule,
       RouterModule.forRoot(routes, { useHash: true } )
   ],
   exports: [RouterModule],
})
export class AppModule { }
