import { Component, signal } from '@angular/core';

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

  reset(){
    this.count.set(0)
  }

  increment(){
    this.count.update(val => val+1)
  }

  decrement(){
    this.count.update(val => val-1)
  }

  updateName(newName:string){
    this.user.update(u => ({...u, name:newName}));
    // this.user.update(u => ({
    //   u.name = newName
    //   return u;
    // }));
  }

}
