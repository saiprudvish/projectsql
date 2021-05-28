import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminsongsComponent } from './adminsongs/adminsongs.component';
import { DetailsComponent } from './details/details.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AdminComponent,
    AdminsongsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
