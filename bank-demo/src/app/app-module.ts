import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AccountList } from './account-list/account-list';
import { AccountDetail } from './account-detail/account-detail';
import { provideHttpClient } from '@angular/common/http';
import { Signals } from './signals/signals';

@NgModule({
  declarations: [App, AccountList, AccountDetail, Signals],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
