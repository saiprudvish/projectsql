import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { SongsComponent } from './songs/songs.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { WebmallComponent } from './webmall/webmall.component';



const routes: Routes = [
  {path:'all',component:WebmallComponent,children:[
  
      {path:'games',component:GamesComponent},
      {path:'songs',component:SongsComponent},
      {path:'tv',component:TelivisionsComponent},
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }