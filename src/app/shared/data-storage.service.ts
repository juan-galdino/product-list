import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeProducts(products: string[]) {
    if(products) {
      this.http.put(environment.API_URL, products).subscribe()
    }
  }

  fetchProducts() {
    return this.http.get(environment.API_URL)
      .pipe( map((products: string[]) => {
              if(!products) {
                return []
              }
              return products 
            }
          )      
          )
  }
}