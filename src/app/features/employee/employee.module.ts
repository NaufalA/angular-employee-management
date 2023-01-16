import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {EmployeeListPage} from "./employee-list/employee-list.page";
import { EmployeeAddPage } from './employee-add/employee-add.page';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {PaginationControlComponent} from "../../shared/components/pagination-control/pagination-control.component";


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListPage,
    EmployeeAddPage
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ButtonComponent,
    PaginationControlComponent
  ]
})
export class EmployeeModule { }
