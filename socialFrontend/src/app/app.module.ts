import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import {UserServiceService} from '../app/service/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
