import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeList1Component } from './employee-list1/employee-list1.component';

const routes: Routes = [{path:'departments',component:DepartmentListComponent},
{path:'employees',component:EmployeeList1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeList1Component]
