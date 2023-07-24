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
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';

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
    ButtonModule,
    TableModule,
    TagModule,
    MultiSelectModule,
    SliderModule,
    ProgressBarModule,
    DialogModule
  ],
  providers: [],
})
export class PrimeNgModule { }
