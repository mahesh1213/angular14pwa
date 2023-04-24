import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { GtevalidationService } from './gtevalidation.service';

@Injectable({
  providedIn: 'root'
})
export class GteValidatorService {

  constructor(private gteService: GtevalidationService) {
  }
 
  gte(val: number): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => {
  
      let v: number = +control.value;
      if (!this.gteService.gte(v,val)) {
        return { 'gte': true, 'requiredValue': val }
      }
  
      return null;
    }
  }
}
