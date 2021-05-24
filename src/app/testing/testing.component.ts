import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { post } from '../models/posts.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  myPosts:post[]=[];

  constructor( private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.fsObj.getPosts().subscribe(
      postsData=>{
        //assign posts
        this.myPosts=postsData;

      },
      err=>{
        console.log("err in posts  data is",err)
      }
    )

  }


}
