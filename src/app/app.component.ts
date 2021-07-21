import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  todayDate:Date=new Date()
  currency="500";
  employees:object[]=[
    
    {empId:1,name:"abu",location:"chennai"},
    {empId:2,name:"anu",location:"vellore"},
    {empId:3,name:"kanisri",location:"coimbatore"},
    {empId:4,name:"abi",location:"kerala"},
    {empId:5,name:"ani",location:"TVM"},

  ];
loginForm=new FormGroup({
  userName:new FormControl(''),
  password:new FormControl(''),

});
collectData()
{
  console.warn(this.loginForm.value);
}
}