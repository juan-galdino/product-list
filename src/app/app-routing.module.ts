import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AdditionFormComponent } from "./addition-form/addition-form.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'adicionar-produto', component: AdditionFormComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}