import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h1>Employee list</h1>
  <h3>{{errMsg}}</h3>
  <ul>
  <li *ngFor="let employee of employeeList">
      {{employee.name}}
  </li>
  </ul>
  `,
  styles: [
  
  ]
})
export class EmployeeListComponent implements OnInit {
public employeeList: any[] = [];
public errMsg = null;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {

   this._employeeService.getEmployees()
    .subscribe(data=>{this.employeeList=data},err=>{this.errMsg = err});
  }

}
