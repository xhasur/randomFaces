import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {emoticonComponent} from './emoticon/emoticon.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    emoticonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
