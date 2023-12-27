import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule with a comma
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateLeavesComponent } from './create-leaves/create-leaves.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DepartmentListComponent,
    UpdateDepartmentComponent,
    CreateDepartmentComponent,
    LeaveListComponent,
    CreateListComponent,
    CreateLeavesComponent,
    UpdateLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
