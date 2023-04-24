import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GteValidatorService } from '../gte-validator.service';
import { gte } from "./gte.validator";
import { gteparam } from './gte.validatorparams';

@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css']
})
export class CustomvalidatorComponent implements OnInit {

  constructor(private gteValidator:GteValidatorService) {}

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    numVal: new FormControl("", [gte]),
    numValue: new FormControl("", [gteparam(50)]),
    numValueData: new FormControl("", [this.gteValidator.gte(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirm: new FormControl("", [Validators.required])
  }, { validators: this.matchPassword });

  get numVal() {
    return this.myForm.get("numVal");
  }

  get numValue() {
    return this.myForm.get("numValue");
  }

  get password() {
    return this.myForm.get("password");
  }

  get confirm() {
    return this.myForm.get("confirm");
  }

  get numValueData() {
    return this.myForm.get("numValueData");
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
 
    const password = control?.get("password")?.value;
    const confirm = control?.get("confirm")?.value;
 
    console.log('password conform',password,confirm);
    if (password != confirm) { return { 'noMatch': true } }
 
    return null
 
  }
 

  onSubmit() {
    console.log(this.myForm.value);
  }

}
