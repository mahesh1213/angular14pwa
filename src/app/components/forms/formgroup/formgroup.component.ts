import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {

  contactForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode:new FormControl(),
        country: new FormControl(),
      })
    })
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
  }

}
