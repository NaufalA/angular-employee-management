import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {EmployeeListPage} from "./employee-list/employee-list.page";
import {EmployeeAddPage} from "./employee-add/employee-add.page";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        title: 'Employee | List',
        component: EmployeeListPage,
      },
      {
        path: 'add',
        title: 'Employee | Add',
        component: EmployeeAddPage,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
