import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DownloadappComponent } from './downloadapp/downloadapp.component';
import { HitsComponent } from './hits/hits.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MymusicComponent } from './mymusic/mymusic.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TestingComponent } from './testing/testing.component';
import { TrendingComponent } from './trending/trending.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'signin', component:LoginComponent},
  {path:'mymusic', component:RegisterComponent},
  {path:'products',component:MobilesComponent},
  {path:'test',component:TestingComponent},
  {path:'user',component:UsersComponent},
  {path:'downloadapp', component:DownloadappComponent},
  {path:'topmusic',component:MymusicComponent,children:[
    {path:'heal',component:TrendingComponent},
    {path:'music',component:HitsComponent},
    {path:'hits',component:ChartsComponent},
    {path:'',redirectTo:'/topmusic/heal',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }