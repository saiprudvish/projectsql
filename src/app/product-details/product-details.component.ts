import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  @Input() ProductObj:Product;
  //custo((m event
  @Output() myEvent=new EventEmitter();


  sendProductDetailsParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);


  }

  

}
