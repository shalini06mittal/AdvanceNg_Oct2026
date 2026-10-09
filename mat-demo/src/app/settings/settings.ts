import { Component } from '@angular/core';
import { Theme } from '../services/theme';

@Component({
  selector: 'app-settings',
  standalone: false,
  styleUrl: './settings.scss',
  templateUrl: './settings.html',
})
export class Settings {
   constructor(public themeService: Theme){}
}

