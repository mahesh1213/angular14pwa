import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EagarlyRandomnumberService } from './service/randomnumber.service';

const routes:Routes =[
  {path:'eager',component:DashboardComponent}
]

console.log('Eagarly module calling');

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  exports:[RouterModule,DashboardComponent],

})
export class EagarlyModule { }
