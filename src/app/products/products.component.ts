import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:Product[]=[

    {
    productImage:"https://static.iplt20.com/players/210/1.png",
    productTitle:"MS DHONI",
    description:"Wicket Keeper/Batsman"
    },
     {    
        productImage:"https://static.iplt20.com/players/210/14.png",
            productTitle:"SURESH RAINA",
            description:"Batsman"
            },
            {
              productImage:"https://parimatchnews.com/wp-content/uploads/2020/11/Faf-du-Plessis.png",
              productTitle:"FAF DU PLESSIS",
              description:"Batsman"
              },
              {
                productImage:"https://static.iplt20.com/players/210/25.png",
                productTitle:"DWAYNE BRAVO",
                description:"ALL-Rounder"
                },
                {
                  productImage:"https://static.iplt20.com/players/210/9.png",
                  productTitle:"RAVINDRA JADEJA",
                  description:"ALL-Rounder"
                  },
                  {
                    productImage:"https://static.iplt20.com/players/210/5443.png",
                    productTitle:"RUTURAJ GAIKWAD",
                    description:"BATSMAN"
                    },
                  {
                    productImage:"https://static.iplt20.com/players/210/2939.png",
                    productTitle:"SAM CURRAN",
                    description:"ALL-Rounder"
                    },
                    {
                      productImage:"https://static.iplt20.com/players/210/100.png",
                      productTitle:"AMBATI RAYUDU",
                      description:"BATSMAN"
                      },
                      {
                        productImage:"https://static.iplt20.com/players/210/1735.png",
                        productTitle:"MOEEN ALI",
                        description:"ALL-Rounder"
                        },
                       
                        
                        {
                          productImage:"https://res.cloudinary.com/celebritystill/image/upload/v1523803250/ipl/shardul-thakur.png",
                          productTitle:"SHARDUL THAKUR",
                          description:"BOWLER"
                          },
                          {
                            productImage:"https://static.iplt20.com/players/210/140.png",
                            productTitle:"DEEPAK CHAHAR",
                            description:"BOWLER"
                            },
                            

    ];




    productsSentByChild=[];
    productCount:number=0;
    inc:number=1;
    
   
  getProductDetailsFromChild(productTitle){

      
    
       if (this.productCount<11)
       {  
         this.inc=1;
        for(var i = 0;i<this.productsSentByChild.length;i++) {   
          if(this.productsSentByChild[i]==productTitle)
          {
            this.inc=2;
          }
        }
        if(this.inc==1){
        
       this.productsSentByChild.push(productTitle);
        
        
       this.productCount++;
        }
        
      }

    
       
       

     
    }

}