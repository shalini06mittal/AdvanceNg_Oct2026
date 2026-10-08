import { Component, Input } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-card',
  standalone: false,
  styleUrl: './employee-card.scss',
  templateUrl: './employee-card.html',
})
export class EmployeeCard {

    @Input()
    employee:Employee;

    constructor(){
          this.employee =   {
          "id": 4, "firstName": "David", "lastName": "Lee",
          "email": "david.lee@example.com", "department": "Engineering",
          "role": "DevOps Engineer", "salary": 88000,
          "joinDate": "2021-01-05", "status": "active",
          "avatar": "DL", "skills": ["Docker", "Kubernetes", "CI/CD"]
        }
    }
    get statusClass(){
      const map : Record<string, string> = {
        active : "status-active",
        'on-leave': 'status-leave',
        inactive : 'status-inactive'

      }
      return map[this.employee.status] ?? '';
    }
}
