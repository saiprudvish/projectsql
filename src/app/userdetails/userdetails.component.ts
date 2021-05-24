import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CskService } from '../csk.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  postObj;

  constructor(private ar:ActivatedRoute,private csk:CskService) { }

  ngOnInit(): void {
        //get id from url
        let id=this.ar.snapshot.params.id;

        //get data of post with this current id
        this.csk.getUsersByIdWise(id).subscribe(
          obj=>{
            console.log("obj is ",obj)
            this.postObj=obj;
          },
          err=>{
            console.log("err in reading post",err)
          }
        )
    
    

   
  }
}
