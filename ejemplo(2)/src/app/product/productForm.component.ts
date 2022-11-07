import { Component, Output, EventEmitter } from "@angular/core";
import { Form } from "@angular/forms";
import { Product } from "./product.model";



@Component({

  selector: "paProductForm",

  templateUrl: "productForm.component.html"

})

export class ProductFormComponent {

  form: any;
  model: string = "This is the model";
  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();
  formSubmitted: boolean = false;
  newProduct: Product = new Product();

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form
    }
  }
} 
