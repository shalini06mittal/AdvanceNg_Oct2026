import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountList } from './account-list/account-list';
import { Signals } from './signals/signals';
import { Empform } from './empform/empform';
import { EmpReactiveForm } from './emp-reactive-form/emp-reactive-form';
import { FormBuilderDemo } from './form-builder-demo/form-builder-demo';



const routes: Routes = [
  {path:'', redirectTo:'accounts', pathMatch:'full'},
  {path:'accounts', component:AccountList},
  {path:'signals', component:Signals},
  {path:'template', component:Empform},
  {path:'reactive', component:EmpReactiveForm},
  {path:'build', component:FormBuilderDemo},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
