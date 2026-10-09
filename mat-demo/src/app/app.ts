import { Component, signal } from '@angular/core';
import { Theme } from './services/theme';
//https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  notifCount = 2;

  constructor(public themeService: Theme){}
  ngOnInit(): void {
    this.themeService.init();
  }
}
