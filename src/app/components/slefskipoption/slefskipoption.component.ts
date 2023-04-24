import { Component, OnInit } from '@angular/core';
import { RandomnumberService } from 'src/app/core/services/randomnumber.service';

@Component({
  selector: 'app-slefskipoption',
  templateUrl: './slefskipoption.component.html',
  styleUrls: ['./slefskipoption.component.css'],
})
export class SlefskipoptionComponent implements OnInit {
  randomNo:any;
  constructor(private randomService: RandomnumberService) {
    this.randomNo = randomService.sharedValue;
   }

  ngOnInit(): void {
  }

}
