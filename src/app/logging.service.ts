import { Injectable } from '@angular/core';

@Injectable()
export class LogginService {
  log(){
    console.log("I am the service...");
  }
  constructor() { }

}
