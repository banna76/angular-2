import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { APP_ROUTES_PROVIDER } from "./app.routes";
import { FilterPipe } from './filter.pipe';
import { LogginService } from "./logging.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
