import { Component, OnInit } from '@angular/core';
import { RandomnumberService } from 'src/app/core/services/randomnumber.service';

@Component({
  selector: 'app-selfskipchild',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  viewProviders:[RandomnumberService]
})
export class SelfSkipChildComponent implements OnInit {

  randomNo:any;
  constructor(private randomService: RandomnumberService) {
    this.randomNo = randomService.sharedValue;
   }

  ngOnInit(): void {
  }

}
