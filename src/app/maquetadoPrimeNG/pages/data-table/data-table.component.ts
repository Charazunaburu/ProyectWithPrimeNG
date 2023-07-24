import { Component,ViewChild } from '@angular/core';
import { Customer, Representative } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

    @ViewChild('dataTablePrueba') dataTablePrueba: Table | undefined;
    customers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    visualizarModal:boolean = false;

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
      this.customerService.getCustomersLarge().then((customers:Customer[]) => {
          this.customers = customers;
          this.loading = false;

          this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      });
      this.representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
        { label: 'Unqualified', value: 'unqualified' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'New', value: 'new' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Proposal', value: 'proposal' }
    ];
  }
    clear(table: Table) {
      table.clear();
  }
  pruebaButton(customer:Customer):void{
    console.log(customer)
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dataTablePrueba!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  showDialog():void{
    this.visualizarModal = true
  }
  hideDialog(visible:boolean):void{
    this.visualizarModal = visible
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return '';
        default:
          return ''
    }
  }
}
