import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRandomService } from './service/random.service';

const routes:Routes =[
      {path:'',component:DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  exports:[RouterModule]
})
export class AdminModule { }
