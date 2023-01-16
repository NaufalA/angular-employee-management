import {Component} from '@angular/core';
import Employee from "../../../shared/models/employee";
import PagedData from "../../../shared/models/PagedData";

const employees: PagedData<Employee> = {
    page: 0,
    size: 10,
    count: 5,
    totalPages: 10,
    totalCount: 100,
    data: [
      {
        "id": 1,
        "username": "johndoe",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "birthDate": new Date("1995-01-01"),
        "basicSalary": 50000,
        "status": "active",
        "group": "IT",
        "description": "Lead developer"
      },
      {
        "id": 2,
        "username": "janedoe",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "janedoe@example.com",
        "birthDate": new Date
        ("1997-02-01"),
        "basicSalary":
          45000,
        "status":
          "active",
        "group":
          "Marketing",
        "description":
          "Social media manager"
      },
      {
        "id":
          3,
        "username":
          "jackdoe",
        "firstName":
          "Jack",
        "lastName":
          "Doe",
        "email":
          "jackdoe@example.com",
        "birthDate":
          new Date("1990-03-01"),
        "basicSalary":
          60000,
        "status":
          "active",
        "group":
          "Finance",
        "description":
          "Financial analyst"
      }
      ,
      {
        "id":
          4,
        "username":
          "jennydoe",
        "firstName":
          "Jenny",
        "lastName":
          "Doe",
        "email":
          "jennydoe@example.com",
        "birthDate":
          new Date("1992-04-01"),
        "basicSalary":
          55000,
        "status":
          "active",
        "group":
          "HR",
        "description":
          "Recruitment specialist"
      }
      ,
      {
        "id":
          5,
        "username":
          "jimdoe",
        "firstName":
          "Jim",
        "lastName":
          "Doe",
        "email":
          "jimdoe@example.com",
        "birthDate":
          new Date("1994-05-01"),
        "basicSalary":
          50000,
        "status":
          "active",
        "group":
          "IT",
        "description":
          "Software engineer"
      }
    ]
  }
;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.page.html',
  styleUrls: ['./employee-list.page.scss']
})
export class EmployeeListPage {
  pageData = {
    page: employees.page,
    size: employees.page,
    count: employees.count,
    totalPages: employees.totalPages,
    totalCount: employees.totalCount
  };
  data: any[] = [...employees.data.map(e => ({
    ...e,
    birthDate: e.birthDate.toLocaleString()
  }))]
  cols = Object.keys(employees.data[0]);

  changePage(page: number) {
    this.pageData.page = page;
  }

  changeSize(size: number) {
    this.pageData.size = size;
  }
}
