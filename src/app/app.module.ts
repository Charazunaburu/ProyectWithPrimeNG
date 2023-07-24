import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

//configuracion del locale de la app
import  localEsSv  from "@angular/common/locales/es-SV";
import { registerLocaleData } from "@angular/common";


registerLocaleData(localEsSv);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    CalendarModule,
    PrimeNgModule

  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es-SV'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
