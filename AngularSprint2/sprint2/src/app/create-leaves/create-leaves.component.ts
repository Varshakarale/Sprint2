import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-create-leaves',
  templateUrl: './create-leaves.component.html',
  styleUrls: ['./create-leaves.component.css']
})
export class CreateLeavesComponent {
  leave: Leave = new Leave();
  constructor(private leaveService: LeaveService,
    private router: Router) { }

  ngOnInit(): void{

  }

  saveLeave(){
  this.leaveService.createLeave(this.leave).subscribe( data =>{
    console.log(data);
    this.goToLeaveList
  },
    
    (  error: any) => {
    return console.log(error);
  });
}

  goToLeaveList(){
    this.router.navigate(['/leave']);

  }
  
  onSubmit(){
    console.log(this.leave);
    this.saveLeave();

  }
}
