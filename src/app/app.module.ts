import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgPersonModule } from 'ng-person';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgPersonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
