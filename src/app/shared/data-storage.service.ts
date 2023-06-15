import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ProductListService } from "../product-list/product-list.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private productListService: ProductListService) {}

  storeProducts() {
  }

  fetchProducts() {
    return this.http.get(environment.API_URL)
      .pipe(
        tap((products: string[]) => this.productListService.products = products)      
      )
  }
}