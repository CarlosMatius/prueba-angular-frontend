import { AuthInterceptorService } from './interceptor/authInterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
