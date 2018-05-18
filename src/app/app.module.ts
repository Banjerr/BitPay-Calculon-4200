import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CalculonDisplayComponent } from './calculon-display/calculon-display.component';
import { CalculonNumpadComponent } from './calculon-numpad/calculon-numpad.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculonDisplayComponent,
    CalculonNumpadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
