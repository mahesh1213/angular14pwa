import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function gteparam(val: number): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => {
   
      let v: number = +control.value;
   
      if (isNaN(v)) {
        return { 'gte': true, 'requiredValue': val }
      }      
   
      if (v <= +val) {
        return { 'gte': true, 'requiredValue': val }
      } 
        
      return null;
      
    }
   
  }