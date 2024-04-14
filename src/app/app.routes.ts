import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BuyerDashboadComponent } from './customer/buyer/buyer-dashboad/buyer-dashboad.component';


import { AppCartComponent } from './customer/app-cart/app-cart.component';
import { AboutCompComponent } from './about-comp/about-comp.component';


export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {path:"about",component:AboutCompComponent},
  {path:"buyer",component:BuyerDashboadComponent},
 {path:"cart",component:AppCartComponent}
    ]
  
