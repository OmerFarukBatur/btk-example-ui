import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent 
   ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
