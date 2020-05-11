import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SaveTheDateComponent } from './save-the-date/save-the-date.component';
import { PreviousPartiesComponent } from './previous-parties/previous-parties.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SaveTheDateComponent,
    PreviousPartiesComponent,
    Carousel1Component,
    Carousel2Component,
    ContactsComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
