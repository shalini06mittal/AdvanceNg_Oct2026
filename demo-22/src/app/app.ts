import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Deferred } from './deferred/deferred';
//https://angular.dev/tutorials/learn-angular
//https://angular.dev/tutorials/signals
//https://angular.dev/tutorials/first-app

//https://angular.dev/tutorials
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('demo-22');
}
