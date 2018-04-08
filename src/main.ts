import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { APP_ROUTES_PROVIDER } from "./app/app.routes";
import { LogginService } from "./app/logging.service";
import {  HttpModule, RequestOptions } from "@angular/http";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [APP_ROUTES_PROVIDER, LogginService,  HttpModule, RequestOptions]);
