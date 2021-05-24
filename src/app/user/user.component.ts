import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CskService } from '../csk.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mySubscription:any;
  users;

  constructor(private usObj:CskService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.usObj.getUsersById().subscribe(
      userData=>{
        this.users=userData;
      },
      err=>{
        console.log("error in getting posts data",err)
      }
    )
  }

  onSelectId(id){
    this.router.navigateByUrl('user/'+id)

  }
  
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
   }

  


}