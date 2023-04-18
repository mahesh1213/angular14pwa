import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class ProductsService {

  constructor(@Inject(LoggerService) private loggerService:any) {
    this.loggerService.log("Product Service Constructed");
}

public  getProducts() {

    this.loggerService.log("getProducts called");
    let products:Product[];

    products=[
        new Product(1,'Memory Card',500),
        new Product(1,'Pen Drive',750),
        new Product(1,'Power Bank',100)
    ]

    this.loggerService.log(products);
    return products;               
}
}
