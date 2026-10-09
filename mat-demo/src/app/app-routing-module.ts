import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeForm } from './employee-form/employee-form';
import { Dashboard } from './dashboard/dashboard';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { Settings } from './settings/settings';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: Dashboard
  },
  {
    path: 'employees', component: EmployeeList
  },
  { path: 'employees/add', component: EmployeeForm },
  { path: 'employees/:id', component: EmployeeDetail },

  {
    path: 'settings', component: Settings
    // loadChildren: () =>
    //   import('./features/settings/settings.module').then(m => m.SettingsModule),
  },
  { path: '**', redirectTo: 'dashboard' },
  // {path:'employee', component:EmployeeComponent},
  // {path:'', component:HomeComponent},

  // {path:'', redirectTo:'employees', pathMatch:'full'},
  // {path:'employees', component: EmployeeList},
  // {path:'add', component: EmployeeForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
