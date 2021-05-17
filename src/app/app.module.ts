import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from  '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import{} from '@angular/common/http'
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CardFourComponent } from './card-four/card-four.component';
import { CardFiveComponent } from './card-five/card-five.component';
import { CardSixComponent } from './card-six/card-six.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MymusicComponent } from './mymusic/mymusic.component';
import { DownloadappComponent } from './downloadapp/downloadapp.component';
import { TrendingComponent } from './trending/trending.component';
import { ChartsComponent } from './charts/charts.component';
import { HitsComponent } from './hits/hits.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TestingComponent } from './testing/testing.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    CardFiveComponent,
    CardSixComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MymusicComponent,
    DownloadappComponent,
    TrendingComponent,
    ChartsComponent,
    HitsComponent,
    MobilesComponent,
    TestingComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
