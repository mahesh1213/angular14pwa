import { Directive, ElementRef, Input } from '@angular/core';
import { RandomnumberService } from 'src/app/core/services/randomnumber.service';

@Directive({
  selector: '[appSlefskipoption]'
})
export class SlefskipoptionDirective {

  @Input() ttClass!: string;

  constructor(private el: ElementRef, private randomService: RandomnumberService) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML =
      "Directive =>" + this.randomService.sharedValue;
  }

}
