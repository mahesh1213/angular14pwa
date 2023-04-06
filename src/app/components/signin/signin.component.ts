import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { SwPush, SwUpdate } from '@angular/service-worker';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('chartTarget') chartTarget!: ElementRef;
  myChart!: Highcharts.Chart;
  constructor(private updateservice:SwUpdate, private pushService:SwPush) { }
  ngOnInit(): void {
    socket.on('data1',(res)=>{
      this.updateChart(res);
    });
    if(!this.updateservice.isEnabled){
      return;
       }

    this.#handleNotifaction();
  
   }

  updateChart(res:any){
    this.myChart.series[0].setData(res);
  }

  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Stacked column chart'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Bitbucket Consumption in TBs'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
          }
        }
      },
      series: [{
        name: 'CTC',
        type: 'column',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'ASW',
        type: 'column',
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'MQS',
        type: 'column',
        data: [3, 4, 4, 2, 5]
      }]
    };


    this.myChart = chart(this.chartTarget.nativeElement, options);
  }

  async #handleNotifaction(){
    const sub = await this.pushService.requestSubscription({
      serverPublicKey: 'BLTytCGNgiogVxHoezqcGIJ1-vkVIrB4b47KZBPCzehFq9lE_4o1YwLmJKLKBqY-cGRCPkWLMecp-_zudy-rZvo'
    }).then((sub)=> console.log(sub))
     .catch((err)=> console.log('error occur',err));

    this.pushService.messages.subscribe((message)=>{
      console.log('pushService.messages',message);
    });

    this.pushService.notificationClicks.subscribe((message)=>{
      console.log('pushService.notificationClicks',message);
    });

    this.pushService.subscription.subscribe((subscription)=>{
      console.log('pushService.subscription',subscription);
    });
  }

}
