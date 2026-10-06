import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hasExclamationMark } from '../validators/password';

@Component({
  selector: 'app-emp-reactive-form',
  standalone: false,
  styleUrl: './emp-reactive-form.css',
  templateUrl: './emp-reactive-form.html',
})
export class EmpReactiveForm {

  subsemail: FormControl;
  empform: FormGroup;
  email: FormControl;
  address: FormGroup
  city: FormControl
  password: FormControl;

  constructor() {
    this.subsemail = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.address = new FormGroup({ city: this.city })
    this.password = new FormControl('', hasExclamationMark)
    
    this.empform = new FormGroup({
      ename: new FormControl('Sample name', [Validators.required, Validators.minLength(5)]),
      email: this.email,
      address: this.address,
      password: this.password
    })
  }
  subscribe() {
    console.log(this.subsemail.value)
  } 
  onSubmit() {
    console.log('Form values:', this.empform.value); 
    this.empform.reset();
  }

  // name = new FormControl('Guest', [Validators.required]);

  // form:FormGroup;
  // password:FormControl;

  // constructor(){
  //   this.password = new FormControl('dummy', [Validators.required, hasExclamationMark]);
  //   this.form = new FormGroup({
  //     name : this.name,
  //     phone : new FormControl('', [Validators.required,
  //        Validators.pattern(/^\d{10}$/)]),
  //     password : this.password
  //   })
  // }
}
