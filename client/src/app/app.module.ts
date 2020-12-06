import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers:  [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}]
})
export class AppModule { }
