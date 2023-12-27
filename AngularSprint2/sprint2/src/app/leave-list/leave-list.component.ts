import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent {
  leaves: Leave[] = [];
 // leaves: import("c:/Users/Aishwarya/Desktop/my-angular-project/src/app/leave").Leave[];
  constructor(private leaveService: LeaveService,
    private router: Router) { }


  ngOnInit(): void{
    //this.getLeaves();
    this.getLeavess();
      
  }

  private getLeavess(){
    this.leaveService.getLeaveList().subscribe(data =>{
      this.leaves =data;
    
    });
    
  }

  updateLeave(id: number){
    this.router.navigate(['update-leave', id]);

  }
}
