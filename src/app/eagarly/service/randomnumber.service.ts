import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class EagarlyRandomnumberService {

  sharedValue: string;

  constructor() {
    console.log('Shared Service initialised');
    this.sharedValue = 'eagarly loading:' + Math.round(Math.random() * 100);
    console.log(this.sharedValue);
  }

  public getSharedValue() {
    return this.sharedValue;
  }

}
