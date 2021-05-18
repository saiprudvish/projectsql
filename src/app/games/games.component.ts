import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games:Product[]=[];

  constructor(private gObj:GameService) { }

  ngOnInit(): void {
    this.games=this.gObj.getGamesData();

  }

}
