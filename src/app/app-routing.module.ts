import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
     {path:'', component:HomeComponent},
     {path:'about', component:AboutComponent},
     {path:'user/:id/profile', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
