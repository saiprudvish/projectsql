import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

   //inject httpclient module

  constructor(private hc:HttpClient) { }

  
  getids():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  getcolors():Observable<any>{
    return this.hc.get<any>("https://reqres.in/api/unknown");
   }
  
}
