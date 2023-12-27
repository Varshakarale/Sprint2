import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { CreateLeavesComponent } from './create-leaves/create-leaves.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full' },
 // {path: 'update-employee/:id', component: UpdateEmployeeComponent},

  {path: 'create-department ' , component: CreateDepartmentComponent},
  {path: 'department' , component: DepartmentListComponent},
  //{path: '', redirectTo: 'department' , pathMatch: 'full'}


  {path: 'leave' , component: LeaveListComponent},
  {path :'create-leave' , component: CreateLeavesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
