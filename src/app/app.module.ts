import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CreateComponent } from './book/create/create.component';
import { EditComponent } from './book/edit/edit.component';
import { DetailComponent } from './book/detail/detail.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BookModule} from "./book/book.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./book/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CreateComponent,
    EditComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BookModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
