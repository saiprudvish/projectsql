import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminsongsComponent } from './adminsongs/adminsongs.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {
  path:'songa',component:AdminsongsComponent
            }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
