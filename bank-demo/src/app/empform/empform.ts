import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-empform',
  standalone: false,
  styleUrl: './empform.css',
  templateUrl: './empform.html',
})
export class Empform {
  emp:Employee = {
    ename: 'Gues',
    eid: 0,
    email: '',
    phone: '',
    password: '',
    address: {
      city: undefined,
      country: '',
      zipcode: undefined
    }
  }

  saveEmployee(emp:any){

    console.log(emp.value);
    
    

  }
}
