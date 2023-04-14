import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() random:any;
@Input() datamap:any;
number:any;
differ:any;


  constructor(private differs: KeyValueDiffers) {
    console.log('Child1Component:Constructor');
  }
 
  ngOnChanges(){
    console.log('Child1Component:ngOnChanges',this.random);
    this.number = this.random;
  }

  ngOnInit() {
    this.differ = this.differs.find(this.datamap).create();
    console.log('Child1Component',this.random);
    console.log('Child1Component:OnInit');
  }
 
  ngDoCheck() {
    const customerChanges = this.differ.diff(this.datamap);
    if (customerChanges) {
       console.log('Child1Component:ngDoCheck',this.datamap);
    }
  }
 
  ngOnDestroy() {
    console.log('parentComponent:OnDestroy');
  }

}
