import { Component, OnInit } from '@angular/core';
import { CskService } from '../csk.service';
import { Product } from '../models/product.model';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs:Product[]=[];
  users:any;
  constructor(private songObj:SongService,private userObj:CskService) { }

  ngOnInit(): void {
  
    this.songs=this.songObj.getSongsData();
    this.userObj.getUser().subscribe(
      userData=>{
        //assign movies
        this.users=userData;
          
  console.log(this.users)
    
       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    )
  }
    


    }
