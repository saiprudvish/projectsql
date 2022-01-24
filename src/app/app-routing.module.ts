import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsongsComponent } from './addsongs/addsongs.component';
import { CalComponent } from './cal/cal.component';
import { EnterComponent } from './enter/enter.component';
import { GamesComponent } from './games/games.component';
import { HeadsetComponent } from './headset/headset.component';
import { LoginComponent } from './login/login.component';
import { NeedComponent } from './need/need.component';
import { SongsComponent } from './songs/songs.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewsongsComponent } from './viewsongs/viewsongs.component';
import { WebmallComponent } from './webmall/webmall.component';



const routes: Routes = [
  {path:'cal',component:CalComponent},
  {path:'need',component:NeedComponent},
  {path:'user',component:UserComponent},
  {path:'loin',component:EnterComponent},
  {path:'user/:id', component:UserdetailsComponent},
  {path:'all',component:WebmallComponent,children:[
  
      {path:'games',component:GamesComponent},
      {path:'songs',component:SongsComponent},
      {path:'tv',component:TelivisionsComponent},
  ]},
  {path:'musi',component:HeadsetComponent,children:[
    {path:'viewsongs',component:ViewsongsComponent},
    {path:'addsongs',component:AddsongsComponent},
    {path:'',redirectTo:"musi/viewsongs",pathMatch:"full"}
    
  ]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }