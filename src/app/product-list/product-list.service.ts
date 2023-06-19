import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn: 'root'})
export class ProductListService {

  private _products: string[]
  
  constructor(private dataStorageService: DataStorageService){}

  getProducts(): void {
    this.dataStorageService.fetchProducts().subscribe(products => {
      this._products = products
    })
  }
  
  set products ( products: string[] ) {
    this._products = products
  }

  addProducts( product: string ): void {
    this._products.push(product)
    this.dataStorageService.storeProducts(this._products.slice())
  }

  deleteProductItem(index: number): void {
    this._products.splice(index, 1)
    this.dataStorageService.storeProducts(this._products.slice())
  }
}