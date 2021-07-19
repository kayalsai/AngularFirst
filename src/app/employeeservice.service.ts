import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }
  getEmployees()
  {
    return[
      {"id":1,"name":"Anu","age":12},
      {"id":2,"name":"Anbu","age":19},
      {"id":3,"name":"Abu","age":17},
      
      {"id":4,"name":"Anusri","age":18}
      

    ]
  }
}
