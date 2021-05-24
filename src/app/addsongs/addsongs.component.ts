import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Song} from '../models/songs.model'
import { ReqresService } from '../reqres.service';
@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.css']
})
export class AddsongsComponent implements OnInit {

  constructor(private rObj:ReqresService,private router:Router) { }
  

  ngOnInit(): void {

  }
  sModel=new Song('','','');
  onSubmitNewSong(){
    this.rObj.createSong(this.sModel).subscribe(
      res=>{
        //navigate to viewmobiles component
        this.router.navigateByUrl("musi/viewsongs")

      },
      err=>{
        console.log('err in creating new song',err)
      }
    )
     
  }
}
