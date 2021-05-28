import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from '../models/mobiles.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SzzngService {

  constructor(private hc:HttpClient) { }

  ngOnInit(): void {
  }
  getmobiles():Observable<Mobile[]>{
    return this.hc.get<Mobile[]>("http://localhost:3000/mobiles");
   }
  //update mobile
  updateMobile(modifiedMobileOj):Observable<any>{
    return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileOj.id,modifiedMobileOj)
  }

  //delete mobile
  deleteMobile(id):Observable<any>{
    console.log("id is ",id)
    return this.hc.delete("http://localhost:3000/mobiles/"+id)
  }
}
