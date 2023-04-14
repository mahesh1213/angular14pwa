import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {

  count = 0;
 
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }
decrement() {
    this.count--;
}

}
