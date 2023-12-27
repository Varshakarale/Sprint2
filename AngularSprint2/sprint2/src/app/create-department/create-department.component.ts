import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent 
{

  department: Departement = new Departement();
  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void{

  }

  saveDepartment(){
  this.departmentService.createDepartment(this.department).subscribe( data =>{
    console.log(data);
    this.goToDepartmentList;
  },
  error => console.log(error));
}

  goToDepartmentList(){
    this.router.navigate(['/department']);

  }
  
  onSubmit(){
    console.log(this.department);
    this.saveDepartment();

  }

}


