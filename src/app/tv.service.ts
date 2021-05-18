import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor() { }

  private televisions:Product[]=[
    {
      productTitle:"SAMSUNG The Frame 163 cm",
      description:"With the Samsung QA65LS03TAKXXL Television, your home entertainment experience and artistic sensibility will come together in your living room or bedroom. This Frame TV features Samsung Quantum Dot Technology for mesmerizing full-color volume, an Art Mode to create your art gallery at home, and a Multi-view Option to view TV and your smartphone screen simultaneously.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/kbjox3k0/television/e/d/a/samsung-qa65ls03takxxl-original-imafsvh9sj8cxz7v.jpeg?q=70"
      },
      {
      productTitle:"iFFALCON by TCL 79.97 cm",
      description:"Bring home this 81.28-cm (32 inches) TV from iFFALCON and enjoy your favourite video content in HD Ready Resolution. Packed with amazing smart features such as Google Voice Search, Google App Store and Built-in Chromecast, this TV makes accessing entertainment convenient for you, so you can enjoy leading the amazing life of a couch potato.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/k7xnukw0/television/9/z/p/iffalcon-1080p-wide-angle-12mp-waterproof-under-water-portable-original-imafq2fncukhwrc4.jpeg?q=70"
      },
      
      {
      productTitle:"Mi 4A PRO 80 cm",
      description:"There is no fun in watching your favourite movie or show on a TV where the display quality is poor. Now, boost the fun and watch them all in good and clear-quality on this 80 cm (32) Mi smart TV. Its HD Ready display can accentuate your viewing experience and make it better.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg?q=70"
      },
      
      {
      productTitle:"realme 80 cm ",
      description:"Bring home this TV from realme and experience the stunning visuals that result from its Chroma Boost Picture Engine. Boasting a Bezel-less design and Dolby Surround Audio, this Android TV blends right into your decor and offers you audio performance that makes your favourite TV shows, movies, and other video content all the more enjoyable.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/kae95e80/television/f/6/y/realme-tv-32-original-imafrz79pweqeafh.jpeg?q=70"
      },
      
      {
      productTitle:"SAMSUNG 80 cm",
      description:"Take your entertainment to the next level with this Samsung TV. With the Content Guide on this TV, you now have access to content from the top-rated TV shows. The HD picture quality, in combination with PurColor, will ensure that you never have a dull moment throughout your TV-viewing experience. Moreover, with the Screen Mirroring feature, you can connect your compatible devices and watch your favourite TV shows on the big screen.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70"
      },
      
      {
      productTitle:"Mi 4A 100 cm",
      description:"There is no fun in watching your favourite movie or show on a TV where the display quality is poor. Now, don’t ruin the fun and watch them all in good and clear-quality on this 100 cm (40) Mi smart TV. Its Full HD display can accentuate your viewing experience and make it better. You can even access video streaming apps on it and never run out of quality-content to watch and enjoy.",
      productImage:"https://rukminim1.flixcart.com/image/312/312/kc54ivk0/television/g/5/r/mi-l40m5-5ain-original-imaftc5frwsvkmvz.jpeg?q=70"
      }
     
    
  ];

  getTelevisionsData():Product[]{
    return this.televisions;
  }

}
