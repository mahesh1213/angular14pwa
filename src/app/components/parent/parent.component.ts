import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  displayChild = true;
  number = 0;
  array22:any[] = [1,2,3];
  constructor() {
    console.log('parentComponent:Constructor');
  }
 
  toggle() {
    console.log(this.displayChild);
    this.displayChild = !this.displayChild;
  }
 
  ngOnInit() {
    setInterval(() => {
       this.number = Math.floor(Math.random() * 100) + 1;
       console.log('parentComponent',this.number);
    }, 3000);
    console.log('parentComponent:OnInit');
  }
 
  docheck(){
    console.log('docheck');
    this.array22.push(this.number);
  }
 
  ngOnDestroy() {
    console.log('parentComponent:OnDestroy');
  }

}
