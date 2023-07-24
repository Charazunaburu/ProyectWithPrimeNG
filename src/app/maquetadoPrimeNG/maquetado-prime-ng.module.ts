import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { IndexPrimeNgComponent } from './pages/index-prime-ng/index-prime-ng.component';
import { FormularioPrimeNgComponent } from './pages/formulario-prime-ng/formulario-prime-ng.component';
import { MaquetadoPrimeNgRouting } from './maquetado-prime-ng-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DataTableComponent } from './pages/data-table/data-table.component';
import { DataTableModalComponent } from './components/modales/data-table-modal/data-table-modal.component';


@NgModule({
  declarations: [
    IndexPrimeNgComponent,
    FormularioPrimeNgComponent,
    DataTableComponent,
    DataTableModalComponent
  ],
  imports: [
    CommonModule,
    MaquetadoPrimeNgRouting,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class MaquetadoPrimeNGModule { }
