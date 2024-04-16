import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';
import { SocialComponent } from './social/social.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FlagsComponent } from './flags/flags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionsComponent } from './collections/collections.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { InMemoryDataService } from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CardComponent,
    SocialComponent,
    SubscribeComponent,
    FlagsComponent,
    ProductDetailComponent,
    SidebarComponent,
    ContactComponent,
    CollectionsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
