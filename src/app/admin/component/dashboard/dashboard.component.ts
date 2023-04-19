import { Component, OnInit, Optional } from '@angular/core';
import { RandomnumberService } from 'src/app/core/services/randomnumber.service';
import { EagarlyRandomnumberService } from 'src/app/eagarly/service/randomnumber.service';
import { AdminRandomService } from '../../service/random.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appValue:any;
  eagerValue:any;
  lazyValue:any;
  constructor(@Optional() private randomnumberService:RandomnumberService,
              @Optional() private eagerService:EagarlyRandomnumberService,
              @Optional() private lazyService:AdminRandomService) { }

  ngOnInit(): void {
    this.appValue = this.randomnumberService?.getSharedValue();
    this.eagerValue = this.eagerService?.getSharedValue();
    this.lazyValue = this.lazyService?.getSharedValue();
  }

}
