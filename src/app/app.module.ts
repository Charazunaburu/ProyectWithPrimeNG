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
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

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
    PrimeNgModule,
    HttpClientModule

  ],
  providers: [PrimeNGConfig,
    {
      provide:LOCALE_ID, useValue:'es-SV'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private primengConfig: PrimeNGConfig) {
  // Configura los filtros en el idioma deseado
  this.primengConfig.setTranslation({
    startsWith: 'Comienza con',
    contains: 'Contiene',
    notContains: 'No contiene',
    endsWith: 'Termina con',
    equals: 'Igual',
    notEquals: 'No igual',
    noFilter: 'Sin filtro',
    lt: 'Menor que',
    lte: 'Menor o igual que',
    gt: 'Mayor que',
    gte: 'Mayor o igual que',
    is: 'Es',
    isNot: 'No es',
    before: 'Antes',
    after: 'Después',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Corresponder todo',
    matchAny: 'Corresponder cualquier',
    addRule: 'Agregar regla',
    removeRule: 'Eliminar regla',
    dateIs:'La fecha es',
    dateIsNot:'La fecha no es',
    dateBefore:'Antes de la fecha',
    dateAfter:'Después de la fecha',
    // Agrega otras traducciones según sea necesario para el idioma deseado
  });

}
 }
