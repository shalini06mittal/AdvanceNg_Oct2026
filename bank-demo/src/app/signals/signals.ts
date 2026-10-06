import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {

  // new reactivity primitive
  count = signal(0);
  user = signal({name:'tom', age : 30})
  c = 1;
  firstname = signal('Shalini');
  lastname = signal('Mittal');

  fullName = computed(() => `${this.firstname()} ${this.lastname()}`)

  reset(){
    this.count.set(0)
  }

  increment(){
    this.count.update(val => val+1)
    this.c = this.c+ 10;
  }

  decrement(){
    this.count.update(val => val-1)
  }

  updateName(newName:string){
    this.user.update(u => ({...u, name:newName}));
    this.firstname.set('Manisha');
    // this.user.update(u => ({
    //   u.name = newName
    //   return u;
    // }));
  }

}
