import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SzzngService } from '../szzng.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {


  constructor(private songObj:SzzngService) { }

}