import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: string[]
  subscription: Subscription
  constructor(private productListService: ProductListService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.subscription = this.productListService.productsChanged
      .subscribe( (products: string[]) => {
        this.products = products
      } )   
  }

  onDeleteItem(index: number) {
    this.productListService.deleteProductItem(index)
    this.dataStorageService.storeProducts()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
