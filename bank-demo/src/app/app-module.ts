import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AccountList } from './account-list/account-list';
import { AccountDetail } from './account-detail/account-detail';
import { provideHttpClient } from '@angular/common/http';
import { Signals } from './signals/signals';
import { Empform } from './empform/empform';
import { Header } from './header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpReactiveForm } from './emp-reactive-form/emp-reactive-form';
import { FormBuilderDemo } from './form-builder-demo/form-builder-demo';

@NgModule({
  declarations: [
    App,
    AccountList,
    AccountDetail,
    Signals,
    Empform,
    Header,
    EmpReactiveForm,
    FormBuilderDemo,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
