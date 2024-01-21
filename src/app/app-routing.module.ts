import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendsComponent } from './trends/trends.component';
import { ShowshoeComponent } from './showshoe/showshoe.component';
import { ShoesCleanInformationComponent } from './shoes-clean-information/shoes-clean-information.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { SustainableComponent } from './sustainable/sustainable.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"trends", component:TrendsComponent},
  {path:"showshoe/:description/:price", component:ShowshoeComponent},
  {path:"showinformation/:description", component:ShowInformationComponent},
  {path:"cleaning", component:ShoesCleanInformationComponent},
  {path:"sustainable", component:SustainableComponent},
  {path:"cart", component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
