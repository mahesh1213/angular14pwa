import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RandomnumberService {

  sharedValue: string;

  constructor() {
    console.log('Shared Service initialised');
    this.sharedValue = 'root loading:' + Math.round(Math.random() * 100);
    console.log(this.sharedValue);
  }

  public getSharedValue() {
    return this.sharedValue;
  }

}
