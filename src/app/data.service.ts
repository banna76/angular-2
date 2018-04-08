import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
 import "rxjs/add/operator/map";﻿

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  fetchData(){
    return this.http.get('https://nn-angular-dd957.firebaseio.com/.json')
    .map(
      (res) => res.json()
    );
  }
}
