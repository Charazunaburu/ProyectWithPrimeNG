import { Component, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'app-formulario-prime-ng',
  templateUrl: './formulario-prime-ng.component.html',
  styles: [
  ]
})
export class FormularioPrimeNgComponent {

  // public myForm:FormGroup = new FormGroup({
  //   name:new FormControl('',[], []),
  //   price:new FormControl('',[], []),
  //   inStorage:new FormControl('',[], [])
  // });

  public myForm: FormGroup = this.fb.group({
      lastname:[''],
      username:[''],
      country:[null],
      zip:[''],
      calendar:[null],
      address:[''],
  })

  constructor(private fb:FormBuilder){

  }

  public value:string | undefined;
  date: Date | undefined;

  countries!:Countries[];
  selectedCountry!:Countries;


  onSave():void{
    console.log(this.myForm.value);
  }
    ngOnInit() {
      this.countries = [
          { name: 'Australia', code: 'AU' },
          { name: 'Brazil', code: 'BR' },
          { name: 'China', code: 'CN' },
          { name: 'Egypt', code: 'EG' },
          { name: 'France', code: 'FR' },
          { name: 'Germany', code: 'DE' },
          { name: 'India', code: 'IN' },
          { name: 'Japan', code: 'JP' },
          { name: 'Spain', code: 'ES' },
          { name: 'United States', code: 'US' },
          { name: 'El Salvador', code: 'SV' }
      ];

  }
}
