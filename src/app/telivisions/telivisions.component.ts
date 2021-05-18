import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-telivisions',
  templateUrl: './telivisions.component.html',
  styleUrls: ['./telivisions.component.css']
})
export class TelivisionsComponent implements OnInit {
  telivisions:Product[]=[];

  constructor(private tvObj:TvService) { }

  ngOnInit(): void {
    this.telivisions=this.tvObj.getTelevisionsData();
  }

}
