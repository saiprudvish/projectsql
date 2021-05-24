import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song} from './models/songs.model';

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
   getsongs():Observable<Song[]>{
    return this.hc.get<Song[]>("http://localhost:3000/songs");
   }
//to save or create new song
createSong(songObj):Observable<any>{
        return this.hc.post("http://localhost:3000/songs",songObj)
}

}
