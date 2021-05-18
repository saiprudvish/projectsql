import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
 

  constructor() { }

  @Input() product2Obj:Product;

}
