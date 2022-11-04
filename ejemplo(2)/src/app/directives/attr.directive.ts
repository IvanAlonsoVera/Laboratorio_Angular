import {
  Directive, ElementRef, Attribute,
  Input, SimpleChange, Output, EventEmitter, HostBinding, HostListener
} from "@angular/core";
import { Product } from "../product/product.model";

@Directive({
  selector: "[pa-attr]"
})

export class PaAttrDirective {

  @Input("pa-attr")
    //enlaza como si fuese un puente de union
  @HostBinding("class")
  bgClass: any;

  @Input("pa-product")
  product?: Product;

  //crea un emisor onclick para el pa-category
  @Output("pa-category")
  click = new EventEmitter<string>();

  //coje el click de arriba y manda el product category
  @HostListener("click")
  tiggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

  

} 
