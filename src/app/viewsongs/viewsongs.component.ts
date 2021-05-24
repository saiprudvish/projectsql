import { Component, OnInit } from '@angular/core';
import { Song } from '../models/songs.model';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-viewsongs',
  templateUrl: './viewsongs.component.html',
  styleUrls: ['./viewsongs.component.css']
})
export class ViewsongsComponent implements OnInit {
  songs:Song[];
  constructor(private rObj:ReqresService) { }

  ngOnInit(): void {
    this.rObj.getsongs().subscribe(
      data=>{
        this.songs=data;
      },
      err=>{
        console.log("err is ",err)
      }
      )
  }

}
