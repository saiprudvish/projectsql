import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs:Product[]=[];

  constructor(private songObj:SongService) { }

  ngOnInit(): void {
    this.songs=this.songObj.getSongsData();
  }

}
