import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeForm } from './employee-form/employee-form';

const routes: Routes = [
  {path:'', redirectTo:'employees', pathMatch:'full'},
  {path:'employees', component: EmployeeList},
  {path:'add', component: EmployeeForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
