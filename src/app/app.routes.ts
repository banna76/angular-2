import { Routes, RouterModule } from "@angular/router";
import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
 {
  path: 'directory',
  component: DirectoryComponent,
 },
 {
  path: 'directory/:ninja',
  component: DirectoryComponent,
 },
 { path: '',
  component: HomeComponent
 },
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
