import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductListService {
  productsChanged = new Subject()

  private _products: string[]
  
  get products () {
    return this._products.slice()
  }

  set products ( products: string[] ) {
    this._products = products
    this.productsChanged.next(this._products.slice())
  }
}