import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CskService {

    //inject httpclient module

    constructor(private hc:HttpClient) { }
    getUsersById():Observable<any>{
      return this.hc.get<any>('http://localhost:3000/users')
      
    }
  
    getUsersByIdWise(id):Observable<any>{
        
      return this.hc.get<any>('http://localhost:3000/users/'+id)
    }
    getUser():Observable<any>{
        
      return this.hc.get<any>('/user/data')
    }
  
}