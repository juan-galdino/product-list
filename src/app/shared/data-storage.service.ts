import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeProducts() {
  }

  fetchProducts() {
    this.http.get(environment.API_URL)
      .pipe(map(products => products[0]))
  }
}