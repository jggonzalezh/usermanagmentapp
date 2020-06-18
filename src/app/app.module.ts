import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { MainLayoutModule } from './main-layout/main-layout.module';

import { AppComponent } from './app.component';
import { UsersModule } from './domain-features/users/users.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainLayoutModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
