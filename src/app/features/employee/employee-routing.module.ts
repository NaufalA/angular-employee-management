import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {EmployeeListPage} from "./employee-list/employee-list.page";
import {EmployeeCreatePage} from "./employee-create/employee-create.page";

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
        path: 'create',
        title: 'Employee | Create',
        component: EmployeeCreatePage,
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
