import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/core/services/logger.service';
import {ProductsService} from '../../../core/services/products.service';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent implements OnInit {
  contactForm:any;
  constructor(private fb:FormBuilder,@Inject(ProductsService) private productservice:any) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
      skills: this.fb.array([]) ,
    });
    this.addSkills();
    console.log(this.productservice.getProducts());
  }

  get skills() : FormArray {
    return this.contactForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
 
  get country() {
    return this.contactForm.get('country');
  }
 
  get city() {
    return this.contactForm.get("address").get('city');
  }
 
  get street() {
    return this.contactForm.get("address").get('street');
  }
 
  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  onSubmit() {
    if(!this.contactForm.valid){
      return;
    }
    console.log(this.contactForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
