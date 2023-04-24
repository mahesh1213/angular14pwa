import { Component, ElementRef, Host, OnInit, Optional, Self, SkipSelf, ViewChild } from '@angular/core';
import { RandomnumberService } from 'src/app/core/services/randomnumber.service';

@Component({
  selector: 'app-selfskipgrandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
  providers:[]
})
export class SelfSkipGrandchildComponent implements OnInit {

  @ViewChild('btn') butn1!:ElementRef;
  randomNo:any;
  constructor(@Optional() @Host() private randomService: RandomnumberService) {
    this.randomNo = randomService?.sharedValue;
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.butn1.nativeElement.disabled = true;
  }

}
