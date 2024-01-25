import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
...
...
...
imports: [
   BrowserModule,
   // HttpClientModule wird nach BrowserModule importiert.
   HttpClientModule,
],
