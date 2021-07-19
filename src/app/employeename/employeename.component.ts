import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-employeename',
  templateUrl: './employeename.component.html',
  styleUrls: ['./employeename.component.css']
})
export class EmployeenameComponent implements OnInit {
  employees:{id:number; name:string;age:number;}[] |undefined;
  constructor(private _employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeservice.getEmployees();
    console.log()
  }

}
