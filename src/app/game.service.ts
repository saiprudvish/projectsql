import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  private games:Product[]=[
  {
    productTitle:"PUBG",
    description:"",
    productImage:"https://s3b.cashify.in/gpro/uploads/2020/11/26102910/PUBG-Mobile-.jpg"
    },

  {
  productTitle:"Shadow Fight 2",
  description:"",
  productImage:"https://play-lh.googleusercontent.com/rabSKKn43Tc_Xgvz68bblgxlpjgnRVsaN5W7sUloHlASTsTdJGoxtfaxiIMHfEkg3g"
  },
  
  {
  productTitle:"Garena Free Fire- World Series",
  description:"",
  productImage:"https://piunikaweb.com/wp-content/uploads/2020/11/free-fire.jpg"
  },
  
  {
  productTitle:"Call of Duty",
  description:"",
  productImage:"https://assets.gamepur.com/wp-content/uploads/2020/08/27040204/call-of-duty-mobile-poster-4010-850x560.jpg "
  },
  
  {
  productTitle:"Cover Fire",
  description:"",
  productImage:"https://play-lh.googleusercontent.com/DJ-Q23WLgP97MMWNS_SDN84pIErn58PoOt2RzPBUPMekxntt0IwU33AIZbexff7Symbo"
  },
  
  {
  productTitle:"Hill Climb Racing 2",
  description:"",
  productImage:"https://play-lh.googleusercontent.com/-s93vO7_5YBS9cJt7i2AxsXkEMN_yDOLL1sl0GU11cVSiOOZpRg23-H8xK4UceFijqI"
  }
];



getGamesData():Product[]{
  return this.games;
}


}
