import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-forms-template',
  styleUrl: './forms-template.css',
  templateUrl: './forms-template.html',
})
export class FormsTemplate {
  favoriteFramework = '';
  username = 'youngTech';
}
