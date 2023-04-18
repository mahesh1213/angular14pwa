import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './sharemodule/material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from './core/services/logger.service';
import { ProductsService } from './core/services/products.service';
import { EagarlyModule } from './eagarly/eagarly.module';



@NgModule({
  declarations: [
    AppComponent,
    components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagarlyModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //{provide : LocationStrategy , useClass: HashLocationStrategy}
    ProductsService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
