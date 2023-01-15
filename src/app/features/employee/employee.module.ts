import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {EmployeeListPage} from "./employee-list/employee-list.page";
import { EmployeeCreatePage } from './employee-create/employee-create.page';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListPage,
    EmployeeCreatePage
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
