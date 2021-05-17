import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
     this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log(this.users)
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }

}