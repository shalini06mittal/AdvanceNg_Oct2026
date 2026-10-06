import { Routes } from '@angular/router';
import { Deferred } from './deferred/deferred';
import { FormsTemplate } from './forms-template/forms-template';

export const routes: Routes = [
    {path:'', component:Deferred},
    {path:'template', component:FormsTemplate},
];
