import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReserFormComponent } from './components/reser-form/reser-form.component';
import { ReserListComponent } from './components/reser-list/reser-list.component';

import { ReserService } from './services/reser.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReserFormComponent,
    ReserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ReserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
