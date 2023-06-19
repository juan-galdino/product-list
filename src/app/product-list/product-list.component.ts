import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: string[]
  constructor(private productListService: ProductListService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.dataStorageService.fetchProducts().subscribe(products => {
      this.products = products
      this.productListService.products = products
    })
  }

  onDeleteItem(index: number) {
    this.productListService.deleteProductItem(index)
  }
}
