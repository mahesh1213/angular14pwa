import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
//@Injectable()

export class LoggerService {

  constructor() { }
  log(message:any) {
    console.log(message);
  }
}
