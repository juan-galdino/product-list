import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductListService } from "../product-list/product-list.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private productListService: ProductListService) {}

  storeProducts() {
    const products = this.productListService.products
    this.http.put(environment.API_URL, products).subscribe()
  }

  fetchProducts() {
    return this.http.get(environment.API_URL)
      .pipe(
        tap((products: string[]) => {
          this.productListService.products = products}
        )      
      )
  }
}