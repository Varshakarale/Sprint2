
import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { Departement } from '../department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  departments: Departement[] = [];

  constructor(private departmentService: DepartmentService,
    private router: Router) { }


  ngOnInit(): void{
    this.getDepartments();
      
  }

  private getDepartments(){
    this.departmentService.getDepartmentList().subscribe(data =>{
      this.departments = data;
    });

  }

  updateDepartment(id: number): void{
    this.router.navigate(['update-department', id]);

  }

}
