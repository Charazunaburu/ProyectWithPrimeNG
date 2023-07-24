import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPrimeNgComponent } from './pages/index-prime-ng/index-prime-ng.component';
import { FormularioPrimeNgComponent } from './pages/formulario-prime-ng/formulario-prime-ng.component';
import { DataTableComponent } from './pages/data-table/data-table.component';


const routes:Routes = [
  {
    path:'index',
    component:IndexPrimeNgComponent
  },
  {
    path:'formulario',
    component:FormularioPrimeNgComponent
  },
  {
    path:'datatable',
    component:DataTableComponent
  },
  {
    path:'**',
    redirectTo:'index'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class MaquetadoPrimeNgRouting{ }
