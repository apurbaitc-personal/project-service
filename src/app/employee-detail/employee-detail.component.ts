import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h1>Employee detail</h1>
  <h3>{{errMsg}}</h3>
  <ul>
  <li *ngFor="let employee of employeeList">
      {{employee.name}} -{{employee.dept}}
  </li>
  </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {
  public employeeList : any[]  = [];
  public errMsg = null;
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data=>{this.employeeList=data},err=>{this.errMsg = err});
  }

}
