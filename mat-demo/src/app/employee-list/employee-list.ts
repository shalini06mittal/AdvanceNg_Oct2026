import { Component, signal, ViewChild } from '@angular/core';
import { Employee } from '../models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../services/employee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialog } from '../confirm-delete-dialog/confirm-delete-dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employees = signal<Employee[]>([]);
  departments = signal<string[]>([]);
  displayedColumns = ['avatar','name','department','role','status','salary','actions'];
  isLoading = true;
  viewMode: 'table' | 'card' = 'table';
  dataSource = new MatTableDataSource<Employee>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empService: EmployeeService, private router:Router,
      private snackBar: MatSnackBar,
      private dialog: MatDialog
  ){

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (emp, col)=>{
      if(col === 'name') return `${emp.firstName} ${emp.lastName}`;
      return (emp as any)[col]
    }
  }
  ngOnInit(): void {
   this.empService.getAll().subscribe(data => 
    {
      this.employees.set(data);
      console.log(data);
      this.dataSource.data = data;
      this.isLoading = false;
    });

    this.empService.getDepartments().subscribe(d =>{
      this.departments.set(d);
    })
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    //console.log('apply filter ', this.dataSource.data);
    
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  filterByDept(dept: string): void {
    this.dataSource.filterPredicate = (data, filter) =>
      !filter || data.department.toLowerCase() === filter.toLowerCase();
    this.dataSource.filter = dept;
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      active: 'status-active',
      'on-leave': 'status-leave',
      inactive: 'status-inactive',
    };
    return map[status] ?? '';
  }

  onView(emp:Employee){
    console.log('view ',emp.firstName);
    this.router.navigate(['/employees', emp.id])
    

  }
  // onDelete(emp:Employee){
  //   console.log('delete',emp);
  //   const ref = this.dialog.open(ConfirmDeleteDialog, {
  //     width: '400px',
  //     data : {employeeName : `${emp.firstName} ${emp.lastName}`}
  //   });
  //   ref.afterClosed().subscribe((confirmed:boolean)=>{
  //     if(confirmed){
  //       this.employees = this.employees.filter(e => e.id !== emp.id);
  //       this.dataSource.data = this.employees;
  //       this.snackBar.open(`${emp.firstName} has been removed.`, 'Undo', {
  //         duration: 4000,
  //         horizontalPosition: 'end',
  //         verticalPosition: 'bottom',
  //         panelClass: ['snack-warn'],
  //       });
  //     }
  //   })
  // }
}
