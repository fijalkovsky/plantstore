import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AboutService} from './about.service';
import { StoreService } from './store.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuyComponent } from './buy/buy.component';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LinksComponent,
    GalleryComponent,
    NavbarComponent,
    WelcomeComponent,
    BuyComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [
    AboutService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
