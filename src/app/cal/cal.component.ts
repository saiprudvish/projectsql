import { Component, OnInit } from '@angular/core';
import { CskService } from '../csk.service';



@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {


  users;
  
  constructor(private userObj:CskService) { }

ngOnInit(): void {

  this.userObj.getUser().subscribe(
    userData=>{
      //assign movies
      this.users=userData.result;
        console.log(this.users)

  },
    err=>{
      console.log("err in getting movies data",err)
    }

  )
  }
 

}
