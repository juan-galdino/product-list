import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: string[]
  subscription: Subscription
  
  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.subscription = this.productListService.productsChanged
      .subscribe( (products: string[]) => {
        this.products = products
      } )   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
