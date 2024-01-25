import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
        bootstrap: [AppComponent],
   })
export class AppModule {}