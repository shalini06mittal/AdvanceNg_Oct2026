import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  styleUrl: './employee-detail.scss',
  templateUrl: './employee-detail.html',
})
export class EmployeeDetail {
   employee = signal<Employee|undefined>({
     id: 0,
     firstName: '',
     lastName: '',
     email: '',
     department: '',
     role: '',
     salary: 0,
     joinDate: '',
     status: '',
     avatar: '',
     skills: []
   });
  isLoading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empService.getById(id).subscribe(emp => {
      this.employee.set(emp);
      this.isLoading.set(false);
    });
  }

  getStatusClass(status: string|undefined): string {
    const map: Record<string, string> = {
      active: 'status-active',
      'on-leave': 'status-leave',
      inactive: 'status-inactive',
    };
    return (status && map[status]) ?? '';
  }

}
