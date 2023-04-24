import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtevalidationService {

  constructor() { }

  gte(num:any, requiredValue:Number) : Boolean {
 
    if (isNaN(num)) {
      return false;
    }      
  
    if (num <= +requiredValue) {
      return false;
    }
 
    return true;
  }
}
