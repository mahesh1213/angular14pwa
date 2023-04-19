import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//@Injectable()

export class AdminRandomService {
  sharedValue: string;

  constructor() {
    console.log('Shared Service initialised');
    this.sharedValue = 'Lazy loading:' + Math.round(Math.random() * 100);
    console.log(this.sharedValue);
  }

  public getSharedValue() {
    return this.sharedValue;
  }
}
