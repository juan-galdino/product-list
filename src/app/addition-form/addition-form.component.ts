import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductListService } from '../product-list/product-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-addition-form',
  templateUrl: './addition-form.component.html',
  styleUrls: ['./addition-form.component.css']
})
export class AdditionFormComponent {
  @ViewChild('f') productForm: NgForm

  constructor(private productListService: ProductListService, private dataStorageService: DataStorageService){}
  
  onSubmit() {
    let product: string = this.productForm.controls.productName.value
    this.productListService.updateProducts(product)
    this.dataStorageService.storeProducts()
    this.productForm.reset()
  }
}
