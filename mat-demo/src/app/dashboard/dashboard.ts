import { Component, OnInit, signal } from '@angular/core';
import { DashboardStats, Employee } from '../models/employee';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  stats = signal<DashboardStats|null>(null);
  recentEmployees  = signal<Employee[]>([]);
  isLoading = signal(true);

  constructor(private empService: EmployeeService){}
  ngOnInit(): void {
      this.empService.getStats().subscribe(s => {
        this.stats.set(s);
        console.log('get stats', this.stats());
  });
      
      
      this.empService.getAll().subscribe(emps =>{
        // this.recentEmployees.set([...emps]);
        //   this.recentEmployees().sort((a,b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime())
        //   .slice(0,3);
        //   console.log('get emps', this.recentEmployees());
        //   this.isLoading.set(false);
        //   console.log('loading', this.isLoading());
        const recent = [...emps]
  .sort((a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime())
  .slice(0, 3);

this.recentEmployees.set(recent);
this.isLoading.set(false);

console.log('get emps', this.recentEmployees());
      })
    }

    getStatusClass(status:string):string{
        const map: Record<string, string> = {
        active: 'status-active',
        'on-leave': 'status-leave',
        inactive: 'status-inactive',
      };
      return map[status] ?? '';
    }

}


