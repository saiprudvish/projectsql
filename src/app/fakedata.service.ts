import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { post } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  //inject httpclient module
  constructor(private hc:HttpClient) { }
  
  getPosts():Observable<post[]>{
    return this.hc.get<post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getUsers():Observable<any>{
    return this.hc.get<any>("https://reqres.in/api/users?page=2");
   }

}
