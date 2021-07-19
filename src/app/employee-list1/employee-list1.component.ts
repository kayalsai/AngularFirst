import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list1',
  templateUrl: './employee-list1.component.html',
  styleUrls: ['./employee-list1.component.css']
})
export class EmployeeList1Component implements OnInit {
email=new FormControl('');
updateEmail()
{
  this.email.setValue('kanisai@gmail.com');

}
  constructor() { }

  ngOnInit(): void {
  }

}
