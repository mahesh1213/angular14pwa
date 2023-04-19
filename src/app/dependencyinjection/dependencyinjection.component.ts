import { Component, OnInit, Optional } from '@angular/core';
import { AdminRandomService } from '../admin/service/random.service';
import { RandomnumberService } from '../core/services/randomnumber.service';
import { EagarlyRandomnumberService } from '../eagarly/service/randomnumber.service';

@Component({
  selector: 'app-dependencyinjection',
  templateUrl: './dependencyinjection.component.html',
  styleUrls: ['./dependencyinjection.component.css'],
  providers:[]
})
export class DependencyinjectionComponent implements OnInit {
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
