import { Component } from '@angular/core';

@Component({
  selector: 'index-prime-ng',
  templateUrl: './index-prime-ng.component.html',
  styles: [
  ]
})
export class IndexPrimeNgComponent {
  public nameLower:string = 'yohalmo';
  public nameUpper:string = 'YOHALMO';
  public fullName:string = 'yOhAlMo';

  public customDate:Date = new Date();
}
