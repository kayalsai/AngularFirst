import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
employees:any;
  constructor(private _employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
 
  this.employees=this._employeeservice. getEmployees();
    console.log("hi",this.employees)
    

}
}