import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientService } from './client.service';
import { UsersModule } from './users/users.module';
import {ClientsModule} from './clients/clients.module';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    ClientsModule
  
  ],
  // providers: [{
  //   // provide: HTTP_INTERCEPTORS,
  //   // useClass: AuthInterceptor,
  //   // multi: true
  // },ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
