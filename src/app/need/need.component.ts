import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {
  constructor(private nsObj:ReqresService) { }
  needs;
  ids;
  ngOnInit(): void {
    this.nsObj.getcolors().subscribe(
      userData=>{
        //assign colors
        this.needs=userData;
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
    this.nsObj.getids().subscribe(
      userData=>{
        //assign ids
        this.ids=userData;
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }


}
