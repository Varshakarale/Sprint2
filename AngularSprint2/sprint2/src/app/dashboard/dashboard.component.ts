import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import * as employee from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/EmployeeService';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : employee.Employee = new employee.Employee();
  empList : employee.Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email: ['']
    });    

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;

    this.empService.addEmployee(this.empObj).subscribe((res: any)=>{
        console.log(res);
        this.getAllEmployee();
    },(err: any)=>{
        console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe((res: employee.Employee[])=>{
        this.empList = res;
    },(err: any)=>{
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp : employee.Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);


  }

  updateEmployee() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;

    this.empService.updateEmployee(this.empObj).subscribe((res: any)=>{
      console.log(res);
      this.getAllEmployee();
    },(err: any)=>{
      console.log(err);
    })

  }

  deleteEmployee(emp : employee.Employee) {

    this.empService.deleteEmployee(emp).subscribe((res: any)=>{
      console.log(res);
      alert('Employee deleted successfully');
      this.getAllEmployee();
    },(err: any) => {
      console.log(err);
    });

  }

}
