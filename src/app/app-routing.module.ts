import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionsComponent } from './collections/collections.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'product/:id', component:ProductDetailComponent},
{path:'contact', component:ContactComponent},
{path:'collections/:slug', component:CollectionsComponent},
{path:'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
