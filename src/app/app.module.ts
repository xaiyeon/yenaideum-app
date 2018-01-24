import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { LocalStorageModule } from 'angular-2-local-storage';

// Angular Material Bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './main/header/header.component';
import { BodyComponent } from './main/body/body.component';
import { FooterComponent } from './main/footer/footer.component';
import { DonateListComponent } from './features/donate-list/donate-list.component';
import { DonateEditComponent } from './features/donate-list/donate-edit/donate-edit.component';

import { environment } from '../environments/environment';

// Our body links for navigation
import { HomeComponent } from './main/body/home/home.component';
import { AboutComponent } from './main/body/about/about.component';
import { ContactComponent } from './main/body/contact/contact.component';
import { TodoComponent } from './main/body/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DonateListComponent,
    DonateEditComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    MDBBootstrapModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

 }
