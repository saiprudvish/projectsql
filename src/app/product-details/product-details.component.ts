  
import { Component, Input, EventEmitter, Output} from '@angular/core';

import { Product } from '../models/product.model';
import { Song } from '../models/songs.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  // //to receive data from parent as input
  // @Input() productObj:Product;

  // //create a custom event
  // @Output() myEvent=new EventEmitter();


  // sendProductDetailsToParent(productTitle){
  //     //emit data to parent
  //     this.myEvent.emit(productTitle);
  // }
@Input() productObj:Product;
@Input() productO2bj:Product;




}