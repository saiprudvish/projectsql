import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from 'src/app/models/product.model';
import { ReqresService } from '../reqres.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-addsongs',
  templateUrl: './addsongs.component.html',
  styleUrls: ['./addsongs.component.css']
})
export class AddsongsComponent implements OnInit {
  sModel;

  constructor(private rObj:ReqresService,private router:Router) { }
  

  ngOnInit(): void {

  }
  onSubmitNewSong(){
    this.rObj.createSong(this.sModel).subscribe(
      res=>{
        //navigate to viewmobiles component
        this.router.navigateByUrl("musi/viewsongs")

      },
      err=>{
        console.log('err in creating new song',err)
      }
    )
     
  }
}
