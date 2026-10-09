import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MaterialModule } from './shared/material/material-module';
import { EmployeeCard } from './employee-card/employee-card';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeList } from './employee-list/employee-list';
import { ConfirmDeleteDialog } from './confirm-delete-dialog/confirm-delete-dialog';
import { EmployeeForm } from './employee-form/employee-form';
import { Dashboard } from './dashboard/dashboard';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { Home } from './home/home';
import { Settings } from './settings/settings';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    EmployeeCard,
    EmployeeList,
    ConfirmDeleteDialog,
    EmployeeForm,
    Dashboard,
    EmployeeDetail,
    Home,
    Settings,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
