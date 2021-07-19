import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { LoginComponent } from './login/login.component'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireModule} from '@angular/fire'
import {environment} from 'src/environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    ViewcartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
