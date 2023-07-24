import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from "primeng/panel";
import { ButtonModule } from 'primeng/button';
@NgModule({
  exports: [
    InputTextModule,
    FormsModule,
    CardModule,
    DropdownModule,
    CascadeSelectModule,
    CalendarModule,
    MenubarModule,
    PanelModule,
    ButtonModule
  ],
  providers: [],
})
export class PrimeNgModule { }
