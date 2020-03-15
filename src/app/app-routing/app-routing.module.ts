import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { SaveTheDateComponent } from '../save-the-date/save-the-date.component';
import { PreviousPartiesComponent } from '../previous-parties/previous-parties.component';
import { Carousel1Component } from '../carousel1/carousel1.component';
import { Carousel2Component } from '../carousel2/carousel2.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: {animation: 'HomePage'} },
  { path: 'save-the-date', component: SaveTheDateComponent },
  { path: 'previous-parties', component: PreviousPartiesComponent, data: {animation: 'AboutPage'} },
  { path: 'previous-parties/carousel1', component: Carousel1Component },
  { path: 'previous-parties/carousel2', component: Carousel2Component },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }